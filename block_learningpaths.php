<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

defined('MOODLE_INTERNAL') || die();

/**
 * learningpaths block
 *
 * @package    block_learningpaths
 * @copyright  2021 Pierre Duverneix
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

class block_learningpaths extends block_base {
    public function init() {
        $this->blockname = get_class($this);
        $this->title = get_string('pluginname', 'block_learningpaths');
    }

    public function instance_allow_multiple() {
        return false;
    }

    public function has_config() {
        return true;
    }

    public function instance_allow_config() {
        return true;
    }

    public function get_content() {
        $apiurl = get_config('learningpaths', 'apiurl');
        if (!isset($apiurl)) {
            throw new \Error('No defined API URL');
        }

        $renderer = $this->page->get_renderer('block_learningpaths');
        $content = new \block_learningpaths\output\main($apiurl);

        $this->content = new stdClass();
        $this->content->text = $renderer->render($content);
        return $this->content;
    }

    public function applicable_formats() {
        return array(
            'all' => false,
            'course' => true,
            'course-index' => true,
            'my' => true,
            'site-index' => true,
        );
    }
}
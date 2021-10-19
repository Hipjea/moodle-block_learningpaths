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
        global $COURSE;
        $this->blockname = get_class($this);
        $this->title = get_string('pluginname', 'block_learningpaths');
        $this->courseid = $COURSE->id;
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

    public function specialization() {
    }

    public function get_content() {
        global $PAGE;
        $url = "https://test.luniversitenumerique.fr/wp-json/learningpathsapi/v1/data/1";
        $ch = curl_init($url); // such as http://example.com/example.xml
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $data = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($data, true);

        $this->content = new stdClass();
        $this->content->text = $data['name'];
        $renderer = $this->page->get_renderer('block_studentstracker');
        $content = new \block_learningpaths\output\main();
        $this->content->text = $renderer->render($content);
        return $this->content;
    }

    public function applicable_formats() {
        return array('all' => false, 'course' => true, 'course-index' => false);
    }
}
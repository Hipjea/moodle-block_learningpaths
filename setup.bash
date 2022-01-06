#!/usr/bin/env bash
set -e

GIT_NAME="moodle-block_learningpaths"
PLUGIN_NAME="learningpaths"

if [[ "$OSTYPE" == "darwin"* ]]; then
	realpath() { [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"; }
	ROOT=$(dirname $(dirname $(realpath "$0")))
else
	ROOT=$(dirname $(dirname $(readlink -f $0)))
fi

cd $ROOT

# Rename the plugin directory according to Moodle rules
for DIRECTORY in */ ; do
	TRIMMED_DIRECTORY=$(echo $DIRECTORY | sed 's:/*$::')
	if [ "$TRIMMED_DIRECTORY" = "$GIT_NAME" ]; then
    	mv $DIRECTORY $PLUGIN_NAME
	fi
done

cd $ROOT/$PLUGIN_NAME

# Run the setup scripts
for FILE in * ; do
	if [ "$FILE" = "package.json" ]; then
		yarn install && grunt webpack:dev && grunt webpack:prod
	fi
done

#!/bin/bash
PROJECT_ROOT="$(realpath "$(dirname "$0")/..")"

javac -Xlint:unchecked -Xlint:deprecation -cp "$PROJECT_ROOT/libs/*" -d "$PROJECT_ROOT/bin" "$PROJECT_ROOT/src"/*.java

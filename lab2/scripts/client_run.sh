#!/bin/bash
PROJECT_ROOT="$(realpath "$(dirname "$0")/..")"

java -cp "$PROJECT_ROOT/bin:$PROJECT_ROOT/libs/*" Client



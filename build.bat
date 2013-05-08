@echo off

echo Building WayneMoir.com
echo ##################

echo.
echo.

if exist .\_site (
	rd .\_site /q /s
)

mkdir .\_site

call jekyll build

start "Watching HTML..." /min jekyll build --watch
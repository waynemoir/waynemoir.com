@echo off

echo Building WayneMoir.com
echo ##################

echo.
echo.

if exist .\_site (
	rd .\_site /q /s
)

mkdir .\_site

call jekyll --no-auto

start "Watching HTML..." /min jekyll
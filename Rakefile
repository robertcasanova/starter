desc "Run JS Tests"
task :tests do
	sh %{phantomjs tests/lib/phantom-jasmine/run_jasmine_test.coffee tests/SpecRunner.html}
end
task :build do
	sh %{node tools/r.js -o tools/build.js}
end

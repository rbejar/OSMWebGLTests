# OSMWebGLTests

Testing the possibilities to show 3D OpenStreetMap Maps in browsers with WebGL.

See the example in <http://rbejar.github.io/OSMWebGLTests/index.html> (it takes some time to load!).

For now, I have just followed the instructions in:
<https://www.youtube.com/watch?v=S6LbKH6NnZU>

Quickly summarized:
1. Go to openstreetmap.org, choose an area (better if it is small!) and export the data as OSM XML Data.
2. Go to osm2world.org, download the latest build (binary). Unzip it.
3. In a terminal, run $./osm2world.sh -i ../map.osm -o ../map.obj (Change it according to your paths; -i is the input file, -o is the name of the output file). It will give some Java exceptions. Some times it may not finish because of them. A quick "solution" is downloading a slightly different map area and crossing your fingres.
4. Go to the github of three.js, and download utils/converters/obj/convert_obj_three.py.
5. Transform the obj generated in step 3. The command is: $python convert_obj_three.py -i map.obj -o map.js
6. Finally, you can use this gist to know how to create a web that loads and paints your data in 3D in a WebGL-compatible web browser: <https://gist.github.com/roman01la/5794160> (Obitcontrols.js can be found in the three.js github repo (in examples) and three.min.js too (in build). 
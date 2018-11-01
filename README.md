# Responsive non-dependent Fisheye Menu

### A JavaScript micro-framework for adding fisheye functionality to elements for advanced UI development

Author: Neil Oman
Version: 1

Copyright 2016 Nomanic (support [with license] : nomanic99@gmail.com)  
License: Envato Split License with GPL (see text file)  

Basically free for non-commercial use only.  
If you wish to buy a license, please visit my website.  

## Features

* Simple
* Works with both touch and mouse
* Very lightweight (only 1.29KB minified and gzipped)

## Samples! :)

```
//add script to page
<script type="text/javascript" src="fisheye.js"></script>

//Create HTML for fisheye, any number of fisheyes, must be surrounded by 2 fishspaces, one at each end
<div id="GlubGlub" style="position:relative;width:60%;">
	<img class="fisheye fishspace" src="spacer.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="f.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="i.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="s.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="h.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="e.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="y.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye" src="e.gif" style="float:left;cursor:pointer;" />
	<img class="fisheye fishspace" src="spacer.gif" style="float:left;cursor:pointer;" />
	<div style="clear:both;"></div>
</div>

<script type="text/javascript">

//Create Horizontal Fisheye Menu, dictated by width of container
var fishy=new fisheye();
fishy.create("GlubGlub");

//or Create Vertical Fisheye Menu, dictated by height of container (optional Sensitivity, default 100)
var fishyv=new fisheye();
fishyv.createVert("GlubGlub",100);

</script>
```

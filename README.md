# Responsive non-dependent Fisheye Menu

### A JavaScript micro-framework for adding fisheye functionality to elements for advanced UI development

Author: Neil Oman
Version: 1

Copyright 2016 Neil Oman
Dual licensed under MIT and GPL

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

//Create Horizontal Fisheye Menu
var fishy=new fisheye();
fishy.create("GlubGlub");

//or Create Vertical Fisheye Menu (optional Sensitivity, default 100)
var fishyv=new fisheye();
fishyv.createVert("GlubGlub",100);

//Resize menus on window resize
window.onresize=function() {
	fishy.resize();
	fishyv.resize();
}

</script>
```

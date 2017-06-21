/*
 * This file is part of HaploForge, an online pedigree and haplotype tool.
 *
 * Copyright (C) 2015  Mehmet Tekman
 *
 *  HaploForge is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software Foundation,
 *  Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA
 *
 */


document.write('\
        <div id="selection_tools" class="input_props" >\
          <h3 id="selection_title" ></h3>\
          <table id="selection_table" >\
          </table>\
        </div>\
\
        <!-- Save Dialogs -->\
        <div id="save_and_close" class="input_props" >\
          <h3 id="save_and_close_title"> General Opts. </h3>\
          <table id="save_and_close_table">\
          </table>\
        </div>\
');

document.write('\
\
  <div id="maincircle">\
\
    <input id="haploupload" type="button" \
                 onclick="MainButtonActions.fileUpload()" />\
\
    <input id="haploresume" type="button"\
                 onclick="MainButtonActions.loadHaploFromStorage()"  />\
\
    <input id="pedmodebutton" type="button"\
                 onclick="MainButtonActions.createNewPed()" />\
\
    <input id="pedresume" type="button"\
                 onclick="MainButtonActions.loadPedFromStorage()" />\
\
    <ul class="nodots">\
      <li class="smallspace">\
          <div class="cornerspace lower">\
              <a href="https://github.com/mtekman/haploforge" >source code</a>\
              <br />\
              <a href="test/supplemental_test_data.7z" id="test_assets" >test assets</a>\
          </div>\
          <h1>HaploForge</h1>\
          <h2 class="smallspace">Extensive Haplotype Resolution and Pedigree Creation Tool</h2>\
          <div class="cornerspace upper">\
            <a onclick="BenchMark.launch_display()" >benchmarking</a>\
          </div>\
      </li>\
      <li>\
        <label id="haploupload_label" for="haploupload">Visualize New Haplotypes</label>\
        <label id="haploresume_label" for="haploresume">Resume Previous Analysis</label>\
      </li>\
      <li>\
        <hr class="style15">\
      </li>\
      <li>\
        <label id="pedmodebutton" for="pedmodebutton">Create New Pedigree</label>\
        <label id="pedresume_label" for="pedresume">Resume Pedigree</label>\
      </li>\
    </ul>\
    <img id="settings_wheel" src="public_assets/images/settings_wheel.png" ></img>\
  </div>\
');

document.write('\
\
<div id="homology_buttons" class="input_props" >\
<!--            <input type=button id="hom_exit" value="X" />-->\
\
            <table>\
                <tr>\
                    <td colspan="2" >\
                        <select id="plot_type">\
                            <option selected value="HOM" >Homozygous</option>\
                            <option value="HET" >Heterozygous</option>\
                            <option value="CHET" >Compound Het.</option>\
                        </select>\
                    </td>\
                </tr>\
\
                <tr>\
                    <td>\
                        <label for="zygous_min_stretch">Min Exten:</label>\
                    </td>\
                    <td>\
                        <input type=number id="zygous_min_stretch" value="1" min=1 />\
                    </td>\
                </tr>\
                <tr>\
                    <td>\
                        <label for="zygous_min_score"  >Min Score:</label>\
                    </td>\
                    <td>\
                        <input type=number id="zygous_min_score" value="1" min=1 />\
                    </td>\
                </tr>\
                <tr>\
                    <td colspan="2">\
                        <input type=button id="homology_redraw" value="Update" />\
                    </td>\
                </tr>\
                <tr>\
                    <td colspan="2">\
                        <input type=button id="homology_export" value="Export Data" />\
                    </td>\
                </tr>\
            </table>\
        </div>\
');


document.write('\
<div id="settings_box"></div>\
')
document.write('\
        <div id="useropts">\
          <label><input type="checkbox" id="user_fancy" onchange="userOpts.update(\'fancyGraphics\',this.checked); userOpts.setGraphics(this.checked);" />Adv. Graphics</label><br/>\
          <!--<label><input type="checkbox" id="user_tooltips" onchange="userOpts.update(\'showTooltips\', this.checked);" />Tooltips</label>-->\
        </div>\
');
document.write('\
<div id="filebox" >\
            <input type="button" id="filebox_close" value="X">\
\
            <select id="fileselector">\
              <option selected value="null" >---</option>\
              <option value="allegro">Allegro</option>\
              <option value="genehunter">Genehunter</option>\
              <option value="simwalk" >Simwalk</option>\
              <option value="merlin" >Merlin</option>\
            </select>\
            <br />\
\
            <!-- null -->\
            <div id="box_null" class="boxed">\
            <h6>            \
              Please select a file format from the above list\
              </h6>\
            </div>\
\
            <!-- Allegro -->\
            <div id="box_allegro" class="upload_box border">\
              <label for="allegro_haplo"><input type="file" id="allegro_haplo" accept=".out" >ihaplo file\
                  <div class="tooltip_box" >?</div>\
                  <div class="tooltip_text"><p>Haplotypes file</p>Contains phased genotypes and pedigree data. Points of recombination are determined by HaploHTML5\'s own algorithm.</div>\
              </label>\
              <br/>\
              <label for="allegro_descent"><input type="file" id="allegro_descent" accept=".out" >(optional) founder file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Descent Graph file</p>Contains founder allele groups and descent vectors. Use this instead of HaploHTML5\'s own method for determining points of recombination.</div>\
              </label>\
              <br/>\
              <label for="allegro_map"><input type="file" id="allegro_map">(optional) map\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text"><p>Map file</p>Will provide genetic marker distances in addition to the marker identifiers already present in the ihaplo and inher output files.</div>\
              </label>\
              <br/>\
              <br/>\
              <input id="submit_allegro" type="button" value="Submit" />\
            </div>\
\
\
            <!-- Genehunter -->\
            <div id="box_ghm" class="upload_box border">\
              <label for="ghm_haplo"><input type="file" id="ghm_haplo">haplo file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Haplotypes file</p>Contains phased genotypes and partial pedigree data. Points of recombination are determined by HaploHTML5\'s own algorithm.</div>\
              </label>\
              <br/>\
              <label for="ghm_map"><input type="file" id="ghm_map">(optional) map\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Map file</p>Provides marker identifiers and genetic distances.</div>\
              </label>\
              <br/>\
              <label for="ghm_ped"><input type="file" id="ghm_ped">(optional) pedin\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Pedigree file</p>Without this, genders are inferred from the haplo file through parentage. A pedigree file is required to correctly determine the genders of the last generation.</div>\
              </label>\
              <br/>\
              <br/>\
              <input id="submit_ghm" type="button" value="Submit" onclick="test()" />\
            </div>\
\
            <!-- Simwalk -->\
            <div id="box_sw" class="upload_box border">\
              <label for="sw_haplo">\
                <input type="file" id="sw_haplo" accept=".ALL" >HEF file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Haplotypes and Descent Graph</p>Contains pedigree, phased genotypes, marker identifiers with genetic positions, and descent graph vectors.</div>\
              </label>\
              <br/>\
              <label for="sw_infer_box" >\
                <input checked type="checkbox" id="sw_infer_box" />\
                <h5>Use descent graph vectors?</h5>\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p></p>Uses vectors in HEF file instead of HaploHTML5\'s own algorithm to determine points of recombination.</div>\
              </label>\
              <br />\
              <br/>\
              <input id="submit_sw" type="button" value="Submit" />\
            </div>\
\
            <!-- Merlin -->\
            <div id="box_merlin" class="upload_box border">\
              <label for="merlin_haplo">\
                <input type="file" id="merlin_haplo" accept=".chr" >chr file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Haplotypes file</p>Contains phased genotypes and partial pedigree data. Points of recombination are determined by HaploHTML5\'s own algorithm.</div>\
              </label>\
              <br />\
              <label for="merlin_descent">\
                <input type="file" id="merlin_descent" accept=".flow" >(optional) flow file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Descent Graph file</p>Contains founder allele groups and descent vectors. Use this instead of HaploHTML5\'s own method for determining points of recombination.</div>\
              </label>\
              <br />\
              <label for="merlin_map">\
                <input type="file" id="merlin_map" >(optional) map\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Map file</p>Provides marker identifiers and genetic distances.</div>\
              </label>\
              <br/>\
              <label for="merlin_ped">\
                <input type="file" id="merlin_ped" >(optional) pedin file\
                <div class="tooltip_box" >?</div>\
                <div class="tooltip_text" ><p>Pedigree file</p>Required only if affectation is required as well as gender-specificity. Parentage is otherwise inferred from haplotype output data.</div>\
              </label>\
              <br />\
              <br/>\
              <input id="submit_merlin" type="button" value="Submit" />\
            </div>\
</div>\
');

document.write('\
<div id="index_class" class="input_props" >\
           <span class="not-numbers">\
                <label for="marker_min">From:</label>\
                <input id="marker_min" list="marker_list_min" />\
                <label for="marker_max">To:</label>\
                <input id="marker_max" list="marker_list_max" />\
                <datalist id="marker_list_min" ></datalist>\
                <datalist id="marker_list_max" ></datalist>\
                <input type=button value="Go" id="index_submit" />\
            </span>\
        </div>\
');

document.write('\
\
      <!-- Family Props -->\
        <div id="family_props" class="input_props" >\
          <div class="messages">\
             <h3 id="message_head" >Family</h3>\
             <input class="toprightclose" id="family_submit" type="button" value="✓" />\
          </div>\
\
          <table>\
             <tr>\
               <td>Fam ID: </td>\
               <td><input id="family_id" type="number" /></td>\
             </tr>\
             <tr>\
               <td>Surname:</td>\
               <td><input id="family_name" type="text" /></td>\
             </tr>\
           </table>\
        </div>\
\
\
        <!-- Person Props http://jsfiddle.net/cysCx/258/ -->\
        <div id="person_props" class="input_props">\
          <div class="messages">\
            <h3 id="message_head">Person</h3>\
            <input class="toprightclose" id="pers_submit" type="button" value="✓" />\
            <input class="toprightclose" id="pers_delete" type="button" value="✘" />\
          </div>\
\
          <table>\
            <tr>\
              <td>ID: </td>\
              <td>\
                <input id="pers_id" type="number" />\
              </td>\
            </tr>\
\
            <tr>\
              <td>Name:</td>\
              <td>\
                <input id="pers_name" type="text" /> </td>\
            </tr>\
\
            <tr>\
              <td colspan="2">\
                <input type="checkbox" id="pers_gender_unknown" class="deselector" />\
               <div>\
                <div style="display:inline;z-index:130">\
                  <input type="checkbox" id="pers_gender" name="pers_gender" class="switch" />\
                  <label for="pers_gender">\
                    <span class="first">Male</span>\
                    <span class="second">Female</span>\
                  </label>\
                </div>\
                </div>\
              </td>\
            </tr>\
\
            <tr>\
              <td colspan=2>\
                <input type="checkbox" id="pers_affect_unknown" class="deselector" />\
                <div>\
                <div style="display:inline;">\
                  <input type="checkbox" id="pers_affect" name="pers_affect" class="switch" />\
                  <label for="pers_affect">\
                    <span class="first">Unaffected</span>\
                    <span class="second">Affected</span>\
                  </label>\
                </div>\
                </div>\
              </td>\
            </tr>\
          </table>\
        </div>\
');

document.write('\
      <div id="status_props" class="status">\
          <div class="reflect" id="status_head">Header</div>\
          <div id="status_text">Details go here</div>\
      </div>\
\
\
\
        <!-- Message Props -->\
        <div id="message_props" class="input_props" >\
          <div class="bg" ></div>\
          <div class="messages">\
              <h3 id="message_head" >Header</h3>\
              <input class="toprightclose" id="message_exit" type="button" value="✘" />\
              <p id="message_text" >Stuff we can talk about</p>\
              <div id="message_inputrow" >\
                <input type="text" \
                id="message_input" />\
                <input type="button" \
                id="message_submit" />\
              </div>\
              <div id="message_buttonsrow" >\
                <input id="message_yes" type="button" value="Yes" />\
                <input id="message_no" type="button" value="No" />\
              </div>\
          </div>\
        </div>\
\
        <!-- Benchmark Props -->\
        <div id="bench_props" class="input_props" style="display:none" >\
          <div class="messages">\
             <h3 id="message_head" >Benchmarking</h3>\
             <input class="toprightclose" id="bench_close" type="button" value="✘" />\
             <input class="toprightclose" id="bench_submit" type="button" value="✓" />\
          </div>\
\
          <table class="bench_input">\
             <tr >\
               <td>Founder Couples:</td>\
               <td><input id="bench_root_founder" type="number" min=1 value=3 /></td>\
             </tr>\
             <tr>\
               <td>Max Generations:</td>\
               <td><input id="bench_max_gen" type="number" min=2 value=9 max=100 /></td>\
             </tr>\
             <tr>\
               <td>Size of Alleles:</td>\
               <td><input id="bench_allele_size" type="number" min=16 value=16 /></td>\
             </tr>\
             <tr>\
               <td>Inbreeding Prob:</td>\
               <td><input id="bench_inbreed_prob" type="number" value=0.1 min=0.1 step=0.1  max=1 /></td>\
             </tr>\
             <tr>\
               <td>Export as haplo file?</td>\
               <td><input id="bench_export_haplo" type="checkbox" /></td>\
             </tr>\
           </table>\
        </div>\
');

/*! KineticJS v5.1.0 2014-03-27 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
var Kinetic={};!function(a){var b=Math.PI/180;Kinetic={version:"5.1.0",stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,enableTrace:!1,traceArrMax:100,dblClickWindow:400,pixelRatio:void 0,dragDistance:0,angleDeg:!0,UA:function(){var b=a.navigator&&a.navigator.userAgent||"",c=b.toLowerCase(),d=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[],e=!!b.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);return{browser:d[1]||"",version:d[2]||"0",mobile:e}}(),Filters:{},Node:function(a){this._init(a)},Shape:function(a){this.__init(a)},Container:function(a){this.__init(a)},Stage:function(a){this.___init(a)},BaseLayer:function(a){this.___init(a)},Layer:function(a){this.____init(a)},FastLayer:function(a){this.____init(a)},Group:function(a){this.___init(a)},isDragging:function(){var a=Kinetic.DD;return a?a.isDragging:!1},isDragReady:function(){var a=Kinetic.DD;return a?!!a.node:!1},_addId:function(a,b){void 0!==b&&(this.ids[b]=a)},_removeId:function(a){void 0!==a&&delete this.ids[a]},_addName:function(a,b){void 0!==b&&(void 0===this.names[b]&&(this.names[b]=[]),this.names[b].push(a))},_removeName:function(a,b){if(void 0!==a){var c=this.names[a];if(void 0!==c){for(var d=0;d<c.length;d++){var e=c[d];e._id===b&&c.splice(d,1)}0===c.length&&delete this.names[a]}}},getAngle:function(a){return this.angleDeg?a*b:a}}}(this),function(a,b){if("object"==typeof exports){var c=require("canvas"),d=require("jsdom").jsdom,e=d("<!DOCTYPE html><html><head></head><body></body></html>"),f=b();return Kinetic.document=e,Kinetic.window=Kinetic.document.createWindow(),Kinetic.window.Image=c.Image,Kinetic.root=a,Kinetic._nodeCanvas=c,void(module.exports=f)}"function"==typeof define&&define.amd&&define(b),Kinetic.document=document,Kinetic.window=window,Kinetic.root=a}((1,eval)("this"),function(){return Kinetic}),function(){Kinetic.Collection=function(){var a=[].slice.call(arguments),b=a.length,c=0;for(this.length=b;b>c;c++)this[c]=a[c];return this},Kinetic.Collection.prototype=[],Kinetic.Collection.prototype.each=function(a){for(var b=0;b<this.length;b++)a(this[b],b)},Kinetic.Collection.prototype.toArray=function(){var a,b=[],c=this.length;for(a=0;c>a;a++)b.push(this[a]);return b},Kinetic.Collection.toCollection=function(a){var b,c=new Kinetic.Collection,d=a.length;for(b=0;d>b;b++)c.push(a[b]);return c},Kinetic.Collection._mapMethod=function(a){Kinetic.Collection.prototype[a]=function(){var b,c=this.length,d=[].slice.call(arguments);for(b=0;c>b;b++)this[b][a].apply(this[b],d);return this}},Kinetic.Collection.mapMethods=function(a){var b=a.prototype;for(var c in b)Kinetic.Collection._mapMethod(c)},Kinetic.Transform=function(a){this.m=a&&a.slice()||[1,0,0,1,0,0]},Kinetic.Transform.prototype={copy:function(){return new Kinetic.Transform(this.m)},point:function(a){var b=this.m;return{x:b[0]*a.x+b[2]*a.y+b[4],y:b[1]*a.x+b[3]*a.y+b[5]}},translate:function(a,b){return this.m[4]+=this.m[0]*a+this.m[2]*b,this.m[5]+=this.m[1]*a+this.m[3]*b,this},scale:function(a,b){return this.m[0]*=a,this.m[1]*=a,this.m[2]*=b,this.m[3]*=b,this},rotate:function(a){var b=Math.cos(a),c=Math.sin(a),d=this.m[0]*b+this.m[2]*c,e=this.m[1]*b+this.m[3]*c,f=this.m[0]*-c+this.m[2]*b,g=this.m[1]*-c+this.m[3]*b;return this.m[0]=d,this.m[1]=e,this.m[2]=f,this.m[3]=g,this},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(a,b){var c=this.m[0]+this.m[2]*b,d=this.m[1]+this.m[3]*b,e=this.m[2]+this.m[0]*a,f=this.m[3]+this.m[1]*a;return this.m[0]=c,this.m[1]=d,this.m[2]=e,this.m[3]=f,this},multiply:function(a){var b=this.m[0]*a.m[0]+this.m[2]*a.m[1],c=this.m[1]*a.m[0]+this.m[3]*a.m[1],d=this.m[0]*a.m[2]+this.m[2]*a.m[3],e=this.m[1]*a.m[2]+this.m[3]*a.m[3],f=this.m[0]*a.m[4]+this.m[2]*a.m[5]+this.m[4],g=this.m[1]*a.m[4]+this.m[3]*a.m[5]+this.m[5];return this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g,this},invert:function(){var a=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),b=this.m[3]*a,c=-this.m[1]*a,d=-this.m[2]*a,e=this.m[0]*a,f=a*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),g=a*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g,this},getMatrix:function(){return this.m},setAbsolutePosition:function(a,b){var c=this.m[0],d=this.m[1],e=this.m[2],f=this.m[3],g=this.m[4],h=this.m[5],i=(c*(b-h)-d*(a-g))/(c*f-d*e),j=(a-g-e*i)/c;return this.translate(j,i)}};var a="2d",b="[object Array]",c="[object Number]",d="[object String]",e=Math.PI/180,f=180/Math.PI,g="#",h="",i="0",j="Kinetic warning: ",k="Kinetic error: ",l="rgb(",m={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},n=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Kinetic.Util={_isElement:function(a){return!(!a||1!=a.nodeType)},_isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},_isObject:function(a){return!!a&&a.constructor==Object},_isArray:function(a){return Object.prototype.toString.call(a)==b},_isNumber:function(a){return Object.prototype.toString.call(a)==c},_isString:function(a){return Object.prototype.toString.call(a)==d},_throttle:function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:(new Date).getTime(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=(new Date).getTime();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},_hasMethods:function(a){var b,c=[];for(b in a)this._isFunction(a[b])&&c.push(b);return c.length>0},createCanvasElement:function(){var a=Kinetic.document.createElement("canvas");return a.style=a.style||{},a},isBrowser:function(){return"object"!=typeof exports},_isInDocument:function(a){for(;a=a.parentNode;)if(a==Kinetic.document)return!0;return!1},_simplifyArray:function(a){var b,c,d=[],e=a.length,f=Kinetic.Util;for(b=0;e>b;b++)c=a[b],f._isNumber(c)?c=Math.round(1e3*c)/1e3:f._isString(c)||(c=c.toString()),d.push(c);return d},_getImage:function(b,c){var d,e;if(b)if(this._isElement(b))c(b);else if(this._isString(b))d=new Kinetic.window.Image,d.onload=function(){c(d)},d.src=b;else if(b.data){e=Kinetic.Util.createCanvasElement(),e.width=b.width,e.height=b.height;var f=e.getContext(a);f.putImageData(b,0,0),this._getImage(e.toDataURL(),c)}else c(null);else c(null)},_getRGBAString:function(a){var b=a.red||0,c=a.green||0,d=a.blue||0,e=a.alpha||1;return["rgba(",b,",",c,",",d,",",e,")"].join(h)},_rgbToHex:function(a,b,c){return((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)},_hexToRgb:function(a){a=a.replace(g,h);var b=parseInt(a,16);return{r:b>>16&255,g:b>>8&255,b:255&b}},getRandomColor:function(){for(var a=(16777215*Math.random()<<0).toString(16);a.length<6;)a=i+a;return g+a},get:function(a,b){return void 0===a?b:a},getRGB:function(a){var b;return a in m?(b=m[a],{r:b[0],g:b[1],b:b[2]}):a[0]===g?this._hexToRgb(a.substring(1)):a.substr(0,4)===l?(b=n.exec(a.replace(/ /g,"")),{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10)}):{r:0,g:0,b:0}},_merge:function(a,b){var c=this._clone(b);for(var d in a)c[d]=this._isObject(a[d])?this._merge(a[d],c[d]):a[d];return c},cloneObject:function(a){var b={};for(var c in a)b[c]=this._isObject(a[c])?this.cloneObject(a[c]):this._isArray(a[c])?this.cloneArray(a[c]):a[c];return b},cloneArray:function(a){return a.slice(0)},_degToRad:function(a){return a*e},_radToDeg:function(a){return a*f},_capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},error:function(a){throw new Error(k+a)},warn:function(a){Kinetic.root.console&&console.warn&&console.warn(j+a)},extend:function(a,b){for(var c in b.prototype)c in a.prototype||(a.prototype[c]=b.prototype[c])},addMethods:function(a,b){var c;for(c in b)a.prototype[c]=b[c]},_getControlPoints:function(a,b,c,d,e,f,g){var h=Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2)),i=Math.sqrt(Math.pow(e-c,2)+Math.pow(f-d,2)),j=g*h/(h+i),k=g*i/(h+i),l=c-j*(e-a),m=d-j*(f-b),n=c+k*(e-a),o=d+k*(f-b);return[l,m,n,o]},_expandPoints:function(a,b){var c,d,e=a.length,f=[];for(c=2;e-2>c;c+=2)d=Kinetic.Util._getControlPoints(a[c-2],a[c-1],a[c],a[c+1],a[c+2],a[c+3],b),f.push(d[0]),f.push(d[1]),f.push(a[c]),f.push(a[c+1]),f.push(d[2]),f.push(d[3]);return f},_removeLastLetter:function(a){return a.substring(0,a.length-1)}}}(),function(){var a=Kinetic.Util.createCanvasElement(),b=a.getContext("2d"),c=Kinetic.UA.mobile?function(){var a=window.devicePixelRatio||1,c=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1;return a/c}():1;Kinetic.Canvas=function(a){this.init(a)},Kinetic.Canvas.prototype={init:function(a){a=a||{};var b=a.pixelRatio||Kinetic.pixelRatio||c;this.pixelRatio=b,this._canvas=Kinetic.Util.createCanvasElement(),this._canvas.style.padding=0,this._canvas.style.margin=0,this._canvas.style.border=0,this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top=0,this._canvas.style.left=0},getContext:function(){return this.context},getPixelRatio:function(){return this.pixelRatio},setPixelRatio:function(a){this.pixelRatio=a,this.setSize(this.getWidth(),this.getHeight())},setWidth:function(a){this.width=this._canvas.width=a*this.pixelRatio,this._canvas.style.width=a+"px"},setHeight:function(a){this.height=this._canvas.height=a*this.pixelRatio,this._canvas.style.height=a+"px"},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(a,b){this.setWidth(a),this.setHeight(b)},toDataURL:function(a,b){try{return this._canvas.toDataURL(a,b)}catch(c){try{return this._canvas.toDataURL()}catch(d){return Kinetic.Util.warn("Unable to get data URL. "+d.message),""}}}},Kinetic.SceneCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.SceneContext(this),this.setSize(b,c)},Kinetic.SceneCanvas.prototype={setWidth:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setWidth.call(this,a),c.scale(b,b)},setHeight:function(a){var b=this.pixelRatio,c=this.getContext()._context;Kinetic.Canvas.prototype.setHeight.call(this,a),c.scale(b,b)}},Kinetic.Util.extend(Kinetic.SceneCanvas,Kinetic.Canvas),Kinetic.HitCanvas=function(a){a=a||{};var b=a.width||0,c=a.height||0;Kinetic.Canvas.call(this,a),this.context=new Kinetic.HitContext(this),this.setSize(b,c)},Kinetic.Util.extend(Kinetic.HitCanvas,Kinetic.Canvas)}(),function(){var a=",",b="(",c=")",d="([",e="])",f=";",g="()",h="=",i=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];Kinetic.Context=function(a){this.init(a)},Kinetic.Context.prototype={init:function(a){this.canvas=a,this._context=a._canvas.getContext("2d"),Kinetic.enableTrace&&(this.traceArr=[],this._enableTrace())},fillShape:function(a){a.getFillEnabled()&&this._fill(a)},strokeShape:function(a){a.getStrokeEnabled()&&this._stroke(a)},fillStrokeShape:function(a){var b=a.getFillEnabled();b&&this._fill(a),a.getStrokeEnabled()&&this._stroke(a)},getTrace:function(i){var j,k,l,m,n=this.traceArr,o=n.length,p="";for(j=0;o>j;j++)k=n[j],l=k.method,l?(m=k.args,p+=l,p+=i?g:Kinetic.Util._isArray(m[0])?d+m.join(a)+e:b+m.join(a)+c):(p+=k.property,i||(p+=h+k.val)),p+=f;return p},clearTrace:function(){this.traceArr=[]},_trace:function(a){var b,c=this.traceArr;c.push(a),b=c.length,b>=Kinetic.traceArrMax&&c.shift()},reset:function(){var a=this.getCanvas().getPixelRatio();this.setTransform(1*a,0,0,1*a,0,0)},getCanvas:function(){return this.canvas},clear:function(a){var b=this.getCanvas();a?this.clearRect(a.x||0,a.y||0,a.width||0,a.height||0):this.clearRect(0,0,b.getWidth(),b.getHeight())},_applyLineCap:function(a){var b=a.getLineCap();b&&this.setAttr("lineCap",b)},_applyOpacity:function(a){var b=a.getAbsoluteOpacity();1!==b&&this.setAttr("globalAlpha",b)},_applyLineJoin:function(a){var b=a.getLineJoin();b&&this.setAttr("lineJoin",b)},setAttr:function(a,b){this._context[a]=b},arc:function(){var a=arguments;this._context.arc(a[0],a[1],a[2],a[3],a[4],a[5])},beginPath:function(){this._context.beginPath()},bezierCurveTo:function(){var a=arguments;this._context.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5])},clearRect:function(){var a=arguments;this._context.clearRect(a[0],a[1],a[2],a[3])},clip:function(){this._context.clip()},closePath:function(){this._context.closePath()},createImageData:function(){var a=arguments;return 2===a.length?this._context.createImageData(a[0],a[1]):1===a.length?this._context.createImageData(a[0]):void 0},createLinearGradient:function(){var a=arguments;return this._context.createLinearGradient(a[0],a[1],a[2],a[3])},createPattern:function(){var a=arguments;return this._context.createPattern(a[0],a[1])},createRadialGradient:function(){var a=arguments;return this._context.createRadialGradient(a[0],a[1],a[2],a[3],a[4],a[5])},drawImage:function(){var a=arguments,b=this._context;3===a.length?b.drawImage(a[0],a[1],a[2]):5===a.length?b.drawImage(a[0],a[1],a[2],a[3],a[4]):9===a.length&&b.drawImage(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8])},fill:function(){this._context.fill()},fillText:function(){var a=arguments;this._context.fillText(a[0],a[1],a[2])},getImageData:function(){var a=arguments;return this._context.getImageData(a[0],a[1],a[2],a[3])},lineTo:function(){var a=arguments;this._context.lineTo(a[0],a[1])},moveTo:function(){var a=arguments;this._context.moveTo(a[0],a[1])},rect:function(){var a=arguments;this._context.rect(a[0],a[1],a[2],a[3])},putImageData:function(){var a=arguments;this._context.putImageData(a[0],a[1],a[2])},quadraticCurveTo:function(){var a=arguments;this._context.quadraticCurveTo(a[0],a[1],a[2],a[3])},restore:function(){this._context.restore()},rotate:function(){var a=arguments;this._context.rotate(a[0])},save:function(){this._context.save()},scale:function(){var a=arguments;this._context.scale(a[0],a[1])},setLineDash:function(){var a=arguments,b=this._context;this._context.setLineDash?b.setLineDash(a[0]):"mozDash"in b?b.mozDash=a[0]:"webkitLineDash"in b&&(b.webkitLineDash=a[0])},setTransform:function(){var a=arguments;this._context.setTransform(a[0],a[1],a[2],a[3],a[4],a[5])},stroke:function(){this._context.stroke()},strokeText:function(){var a=arguments;this._context.strokeText(a[0],a[1],a[2])},transform:function(){var a=arguments;this._context.transform(a[0],a[1],a[2],a[3],a[4],a[5])},translate:function(){var a=arguments;this._context.translate(a[0],a[1])},_enableTrace:function(){var a,b,c=this,d=i.length,e=Kinetic.Util._simplifyArray,f=this.setAttr,g=function(a){var d,f=c[a];c[a]=function(){return b=e(Array.prototype.slice.call(arguments,0)),d=f.apply(c,arguments),c._trace({method:a,args:b}),d}};for(a=0;d>a;a++)g(i[a]);c.setAttr=function(){f.apply(c,arguments),c._trace({property:arguments[0],val:arguments[1]})}}},Kinetic.SceneContext=function(a){Kinetic.Context.call(this,a)},Kinetic.SceneContext.prototype={_fillColor:function(a){var b=a.fill()||Kinetic.Util._getRGBAString({red:a.fillRed(),green:a.fillGreen(),blue:a.fillBlue(),alpha:a.fillAlpha()});this.setAttr("fillStyle",b),a._fillFunc(this)},_fillPattern:function(a){var b=a.getFillPatternImage(),c=a.getFillPatternX(),d=a.getFillPatternY(),e=a.getFillPatternScale(),f=Kinetic.getAngle(a.getFillPatternRotation()),g=a.getFillPatternOffset(),h=a.getFillPatternRepeat();(c||d)&&this.translate(c||0,d||0),f&&this.rotate(f),e&&this.scale(e.x,e.y),g&&this.translate(-1*g.x,-1*g.y),this.setAttr("fillStyle",this.createPattern(b,h||"repeat")),this.fill()},_fillLinearGradient:function(a){var b=a.getFillLinearGradientStartPoint(),c=a.getFillLinearGradientEndPoint(),d=a.getFillLinearGradientColorStops(),e=this.createLinearGradient(b.x,b.y,c.x,c.y);if(d){for(var f=0;f<d.length;f+=2)e.addColorStop(d[f],d[f+1]);this.setAttr("fillStyle",e),this.fill()}},_fillRadialGradient:function(a){for(var b=a.getFillRadialGradientStartPoint(),c=a.getFillRadialGradientEndPoint(),d=a.getFillRadialGradientStartRadius(),e=a.getFillRadialGradientEndRadius(),f=a.getFillRadialGradientColorStops(),g=this.createRadialGradient(b.x,b.y,d,c.x,c.y,e),h=0;h<f.length;h+=2)g.addColorStop(f[h],f[h+1]);this.setAttr("fillStyle",g),this.fill()},_fill:function(a){var b=a.fill()||a.fillRed()||a.fillGreen()||a.fillBlue(),c=a.getFillPatternImage(),d=a.getFillLinearGradientColorStops(),e=a.getFillRadialGradientColorStops(),f=a.getFillPriority();b&&"color"===f?this._fillColor(a):c&&"pattern"===f?this._fillPattern(a):d&&"linear-gradient"===f?this._fillLinearGradient(a):e&&"radial-gradient"===f?this._fillRadialGradient(a):b?this._fillColor(a):c?this._fillPattern(a):d?this._fillLinearGradient(a):e&&this._fillRadialGradient(a)},_stroke:function(a){var b=a.dash(),c=a.getStrokeScaleEnabled();a.hasStroke()&&(c||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(a),b&&a.dashEnabled()&&this.setLineDash(b),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.stroke()||Kinetic.Util._getRGBAString({red:a.strokeRed(),green:a.strokeGreen(),blue:a.strokeBlue(),alpha:a.strokeAlpha()})),a._strokeFunc(this),c||this.restore())},_applyShadow:function(a){var b=Kinetic.Util,c=a.getAbsoluteOpacity(),d=b.get(a.getShadowColor(),"black"),e=b.get(a.getShadowBlur(),5),f=b.get(a.getShadowOpacity(),1),g=b.get(a.getShadowOffset(),{x:0,y:0});f&&this.setAttr("globalAlpha",f*c),this.setAttr("shadowColor",d),this.setAttr("shadowBlur",e),this.setAttr("shadowOffsetX",g.x),this.setAttr("shadowOffsetY",g.y)}},Kinetic.Util.extend(Kinetic.SceneContext,Kinetic.Context),Kinetic.HitContext=function(a){Kinetic.Context.call(this,a)},Kinetic.HitContext.prototype={_fill:function(a){this.save(),this.setAttr("fillStyle",a.colorKey),a._fillFuncHit(this),this.restore()},_stroke:function(a){a.hasStroke()&&(this._applyLineCap(a),this.setAttr("lineWidth",a.strokeWidth()),this.setAttr("strokeStyle",a.colorKey),a._strokeFuncHit(this))}},Kinetic.Util.extend(Kinetic.HitContext,Kinetic.Context)}(),function(){var a="get",b="set";Kinetic.Factory={addGetterSetter:function(a,b,c,d,e){this.addGetter(a,b,c),this.addSetter(a,b,d,e),this.addOverloadedGetterSetter(a,b)},addGetter:function(b,c,d){var e=a+Kinetic.Util._capitalize(c);b.prototype[e]=function(){var a=this.attrs[c];return void 0===a?d:a}},addSetter:function(a,c,d,e){var f=b+Kinetic.Util._capitalize(c);a.prototype[f]=function(a){return d&&(a=d.call(this,a)),this._setAttr(c,a),e&&e.call(this),this}},addComponentsGetterSetter:function(c,d,e,f,g){var h,i,j=e.length,k=Kinetic.Util._capitalize,l=a+k(d),m=b+k(d);c.prototype[l]=function(){var a={};for(h=0;j>h;h++)i=e[h],a[i]=this.getAttr(d+k(i));return a},c.prototype[m]=function(a){var b,c=this.attrs[d];f&&(a=f.call(this,a));for(b in a)this._setAttr(d+k(b),a[b]);return this._fireChangeEvent(d,c,a),g&&g.call(this),this},this.addOverloadedGetterSetter(c,d)},addOverloadedGetterSetter:function(c,d){var e=Kinetic.Util._capitalize(d),f=b+e,g=a+e;c.prototype[d]=function(){return arguments.length?(this[f](arguments[0]),this):this[g]()}},backCompat:function(a,b){var c;for(c in b)a.prototype[c]=a.prototype[b[c]]},afterSetFilter:function(){this._filterUpToDate=!1}},Kinetic.Validators={RGBComponent:function(a){return a>255?255:0>a?0:Math.round(a)},alphaComponent:function(a){return a>1?1:1e-4>a?1e-4:a}}}(),function(){var a="absoluteOpacity",b="absoluteTransform",c="Change",d="children",e=".",f="",g="get",h="id",i="kinetic",j="listening",k="mouseenter",l="mouseleave",m="name",n="set",o="Shape",p=" ",q="stage",r="transform",s="Stage",t="visible",u=["id"],v=["xChange.kinetic","yChange.kinetic","scaleXChange.kinetic","scaleYChange.kinetic","skewXChange.kinetic","skewYChange.kinetic","rotationChange.kinetic","offsetXChange.kinetic","offsetYChange.kinetic","transformsEnabledChange.kinetic"].join(p);Kinetic.Util.addMethods(Kinetic.Node,{_init:function(c){var d=this;this._id=Kinetic.idCounter++,this.eventListeners={},this.attrs={},this._cache={},this._filterUpToDate=!1,this.setAttrs(c),this.on(v,function(){this._clearCache(r),d._clearSelfAndDescendantCache(b)}),this.on("visibleChange.kinetic",function(){d._clearSelfAndDescendantCache(t)}),this.on("listeningChange.kinetic",function(){d._clearSelfAndDescendantCache(j)}),this.on("opacityChange.kinetic",function(){d._clearSelfAndDescendantCache(a)})},_clearCache:function(a){a?delete this._cache[a]:this._cache={}},_getCache:function(a,b){var c=this._cache[a];return void 0===c&&(this._cache[a]=b.call(this)),this._cache[a]},_clearSelfAndDescendantCache:function(a){this._clearCache(a),this.children&&this.getChildren().each(function(b){b._clearSelfAndDescendantCache(a)})},clearCache:function(){return delete this._cache.canvas,this._filterUpToDate=!1,this},cache:function(a){{var b=a||{},c=b.x||0,d=b.y||0,e=b.width||this.width(),f=b.height||this.height(),g=b.drawBorder||!1;this.getLayer()}if(0===e||0===f)return void Kinetic.Util.warn("Width or height of caching configuration equals 0. Cache is ignored.");var h=new Kinetic.SceneCanvas({pixelRatio:1,width:e,height:f}),i=new Kinetic.SceneCanvas({pixelRatio:1,width:e,height:f}),j=new Kinetic.HitCanvas({width:e,height:f}),k=(this.transformsEnabled(),this.x(),this.y(),h.getContext()),l=j.getContext();return this.clearCache(),k.save(),l.save(),g&&(k.save(),k.beginPath(),k.rect(0,0,e,f),k.closePath(),k.setAttr("strokeStyle","red"),k.setAttr("lineWidth",5),k.stroke(),k.restore()),k.translate(-1*c,-1*d),l.translate(-1*c,-1*d),"Shape"===this.nodeType&&(k.translate(-1*this.x(),-1*this.y()),l.translate(-1*this.x(),-1*this.y())),this.drawScene(h,this),this.drawHit(j,this),k.restore(),l.restore(),this._cache.canvas={scene:h,filter:i,hit:j},this},_drawCachedSceneCanvas:function(a){a.save(),this.getLayer()._applyTransform(this,a),a.drawImage(this._getCachedSceneCanvas()._canvas,0,0),a.restore()},_getCachedSceneCanvas:function(){var a,b,c,d,e=this.filters(),f=this._cache.canvas,g=f.scene,h=f.filter,i=h.getContext();if(e){if(!this._filterUpToDate){try{for(a=e.length,i.clear(),i.drawImage(g._canvas,0,0),b=i.getImageData(0,0,h.getWidth(),h.getHeight()),c=0;a>c;c++)d=e[c],d.call(this,b),i.putImageData(b,0,0)}catch(j){Kinetic.Util.warn("Unable to apply filter. "+j.message)}this._filterUpToDate=!0}return h}return g},_drawCachedHitCanvas:function(a){var b=this._cache.canvas,c=b.hit;a.save(),this.getLayer()._applyTransform(this,a),a.drawImage(c._canvas,0,0),a.restore()},on:function(a,b){var c,d,g,h,i,j=a.split(p),k=j.length;for(c=0;k>c;c++)d=j[c],g=d.split(e),h=g[0],i=g[1]||f,this.eventListeners[h]||(this.eventListeners[h]=[]),this.eventListeners[h].push({name:i,handler:b});return this},off:function(a){var b,c,d,f,g,h,i=a.split(p),j=i.length;for(b=0;j>b;b++)if(d=i[b],f=d.split(e),g=f[0],h=f[1],g)this.eventListeners[g]&&this._off(g,h);else for(c in this.eventListeners)this._off(c,h);return this},dispatchEvent:function(a){var b={target:this,type:a.type,evt:a};this.fire(a.type,b)},addEventListener:function(a,b){this.on(a,function(a){b.call(this,a.evt)})},remove:function(){var c=this.getParent();return c&&c.children&&(c.children.splice(this.index,1),c._setChildrenIndices(),delete this.parent),this._clearSelfAndDescendantCache(q),this._clearSelfAndDescendantCache(b),this._clearSelfAndDescendantCache(t),this._clearSelfAndDescendantCache(j),this._clearSelfAndDescendantCache(a),this},destroy:function(){Kinetic._removeId(this.getId()),Kinetic._removeName(this.getName(),this._id),this.remove()},getAttr:function(a){var b=g+Kinetic.Util._capitalize(a);return Kinetic.Util._isFunction(this[b])?this[b]():this.attrs[a]},getAncestors:function(){for(var a=this.getParent(),b=new Kinetic.Collection;a;)b.push(a),a=a.getParent();return b},getAttrs:function(){return this.attrs||{}},setAttrs:function(a){var b,c;if(a)for(b in a)b===d||(c=n+Kinetic.Util._capitalize(b),Kinetic.Util._isFunction(this[c])?this[c](a[b]):this._setAttr(b,a[b]));return this},isListening:function(){return this._getCache(j,this._isListening)},_isListening:function(){var a=this.getListening(),b=this.getParent();return"inherit"===a?b?b.isListening():!0:a},isVisible:function(){return this._getCache(t,this._isVisible)},_isVisible:function(){var a=this.getVisible(),b=this.getParent();return"inherit"===a?b?b.isVisible():!0:a},shouldDrawHit:function(){var a=this.getLayer();return a&&a.hitGraphEnabled()&&this.isListening()&&this.isVisible()&&!Kinetic.isDragging()},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){function a(i){for(b=[],c=i.length,d=0;c>d;d++)e=i[d],h++,e.nodeType!==o&&(b=b.concat(e.getChildren().toArray())),e._id===g._id&&(d=c);b.length>0&&b[0].getDepth()<=f&&a(b)}var b,c,d,e,f=this.getDepth(),g=this,h=0;return g.nodeType!==s&&a(g.getStage().getChildren()),h},getDepth:function(){for(var a=0,b=this.parent;b;)a++,b=b.parent;return a},setPosition:function(a){return this.setX(a.x),this.setY(a.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(){var a=this.getAbsoluteTransform().getMatrix(),b=new Kinetic.Transform,c=this.offset();return b.m=a.slice(),b.translate(c.x,c.y),b.getTranslation()},setAbsolutePosition:function(a){var b,c=this._clearTransform();return this.attrs.x=c.x,this.attrs.y=c.y,delete c.x,delete c.y,b=this.getAbsoluteTransform(),b.invert(),b.translate(a.x,a.y),a={x:this.attrs.x+b.getTranslation().x,y:this.attrs.y+b.getTranslation().y},this.setPosition({x:a.x,y:a.y}),this._setTransform(c),this},_setTransform:function(a){var c;for(c in a)this.attrs[c]=a[c];this._clearCache(r),this._clearSelfAndDescendantCache(b)},_clearTransform:function(){var a={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,this._clearCache(r),this._clearSelfAndDescendantCache(b),a},move:function(a){var b=a.x,c=a.y,d=this.getX(),e=this.getY();return void 0!==b&&(d+=b),void 0!==c&&(e+=c),this.setPosition({x:d,y:e}),this},_eachAncestorReverse:function(a,b){var c,d,e=[],f=this.getParent();if(b&&b._id===this._id)return a(this),!0;for(e.unshift(this);f&&(!b||f._id!==b._id);)e.unshift(f),f=f.parent;for(c=e.length,d=0;c>d;d++)a(e[d])},rotate:function(a){return this.setRotation(this.getRotation()+a),this},moveToTop:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveToTop function is ignored.");var a=this.index;return this.parent.children.splice(a,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveUp function is ignored.");var a=this.index,b=this.parent.getChildren().length;return b-1>a?(this.parent.children.splice(a,1),this.parent.children.splice(a+1,0,this),this.parent._setChildrenIndices(),!0):!1},moveDown:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveDown function is ignored.");var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.splice(a-1,0,this),this.parent._setChildrenIndices(),!0):!1},moveToBottom:function(){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. moveToBottom function is ignored.");var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0):!1},setZIndex:function(a){if(!this.parent)return void Kinetic.Util.warn("Node has no parent. zIndex parameter is ignored.");var b=this.index;return this.parent.children.splice(b,1),this.parent.children.splice(a,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){return this._getCache(a,this._getAbsoluteOpacity)},_getAbsoluteOpacity:function(){var a=this.getOpacity();return this.getParent()&&(a*=this.getParent().getAbsoluteOpacity()),a},moveTo:function(a){return Kinetic.Node.prototype.remove.call(this),a.add(this),this},toObject:function(){var a,b,c,d,e=Kinetic.Util,f={},g=this.getAttrs();f.attrs={};for(a in g)b=g[a],e._isFunction(b)||e._isElement(b)||e._isObject(b)&&e._hasMethods(b)||(c=this[a],delete g[a],d=c?c.call(this):null,g[a]=b,d!==b&&(f.attrs[a]=b));return f.className=this.getClassName(),f},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},getLayer:function(){var a=this.getParent();return a?a.getLayer():null},getStage:function(){return this._getCache(q,this._getStage)},_getStage:function(){var a=this.getParent();return a?a.getStage():void 0},fire:function(a,b,c){return c?this._fireAndBubble(a,b||{}):this._fire(a,b||{}),this},getAbsoluteTransform:function(a){return a?this._getAbsoluteTransform(a):this._getCache(b,this._getAbsoluteTransform)},_getAbsoluteTransform:function(a){var b,c,d=new Kinetic.Transform;return this._eachAncestorReverse(function(a){b=a.transformsEnabled(),c=a.getTransform(),"all"===b?d.multiply(c):"position"===b&&d.translate(a.x(),a.y())},a),d},getTransform:function(){return this._getCache(r,this._getTransform)},_getTransform:function(){var a=new Kinetic.Transform,b=this.getX(),c=this.getY(),d=Kinetic.getAngle(this.getRotation()),e=this.getScaleX(),f=this.getScaleY(),g=this.getSkewX(),h=this.getSkewY(),i=this.getOffsetX(),j=this.getOffsetY();return(0!==b||0!==c)&&a.translate(b,c),0!==d&&a.rotate(d),(0!==g||0!==h)&&a.skew(g,h),(1!==e||1!==f)&&a.scale(e,f),(0!==i||0!==j)&&a.translate(-1*i,-1*j),a},clone:function(a){var b,c,d,e,f,g=this.getClassName(),h=Kinetic.Util.cloneObject(this.attrs);for(var j in u){var k=u[j];delete h[k]}for(b in a)h[b]=a[b];var l=new Kinetic[g](h);for(b in this.eventListeners)for(c=this.eventListeners[b],d=c.length,e=0;d>e;e++)f=c[e],f.name.indexOf(i)<0&&(l.eventListeners[b]||(l.eventListeners[b]=[]),l.eventListeners[b].push(f));return l},toDataURL:function(a){a=a||{};var b=a.mimeType||null,c=a.quality||null,d=this.getStage(),e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth()||(d?d.getWidth():0),height:a.height||this.getHeight()||(d?d.getHeight():0),pixelRatio:1}),h=g.getContext();return h.save(),(e||f)&&h.translate(-1*e,-1*f),this.drawScene(g),h.restore(),g.toDataURL(b,c)},toImage:function(a){Kinetic.Util._getImage(this.toDataURL(a),function(b){a.callback(b)})},setSize:function(a){return this.setWidth(a.width),this.setHeight(a.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},getDragDistance:function(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():Kinetic.dragDistance},_get:function(a){return this.nodeType===a?[this]:[]},_off:function(a,b){var c,d,e=this.eventListeners[a];for(c=0;c<e.length;c++)if(d=e[c].name,!("kinetic"===d&&"kinetic"!==b||b&&d!==b)){if(e.splice(c,1),0===e.length){delete this.eventListeners[a];break}c--}},_fireChangeEvent:function(a,b,d){this._fire(a+c,{oldVal:b,newVal:d})},setId:function(a){var b=this.getId();return Kinetic._removeId(b),Kinetic._addId(this,a),this._setAttr(h,a),this
},setName:function(a){var b=this.getName();return Kinetic._removeName(b,this._id),Kinetic._addName(this,a),this._setAttr(m,a),this},setAttr:function(){var a=Array.prototype.slice.call(arguments),b=a[0],c=a[1],d=n+Kinetic.Util._capitalize(b),e=this[d];return Kinetic.Util._isFunction(e)?e.call(this,c):this._setAttr(b,c),this},_setAttr:function(a,b){var c;void 0!==b&&(c=this.attrs[a],this.attrs[a]=b,this._fireChangeEvent(a,c,b))},_setComponentAttr:function(a,b,c){var d;void 0!==c&&(d=this.attrs[a],d||(this.attrs[a]=this.getAttr(a)),this.attrs[a][b]=c,this._fireChangeEvent(a,d,c))},_fireAndBubble:function(a,b,c){var d=!0;b&&this.nodeType===o&&(b.target=this),a===k&&c&&this._id===c._id?d=!1:a===l&&c&&this._id===c._id&&(d=!1),d&&(this._fire(a,b),b&&!b.cancelBubble&&this.parent&&(c&&c.parent?this._fireAndBubble.call(this.parent,a,b,c.parent):this._fireAndBubble.call(this.parent,a,b)))},_fire:function(a,b){var c,d=this.eventListeners[a];if(b.type=a,d)for(c=0;c<d.length;c++)d[c].handler.call(this,b)},draw:function(){return this.drawScene(),this.drawHit(),this}}),Kinetic.Node.create=function(a,b){return this._createNode(JSON.parse(a),b)},Kinetic.Node._createNode=function(a,b){var c,d,e,f=Kinetic.Node.prototype.getClassName.call(a),g=a.children;if(b&&(a.attrs.container=b),c=new Kinetic[f](a.attrs),g)for(d=g.length,e=0;d>e;e++)c.add(this._createNode(g[e]));return c},Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"position"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"x",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"y",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"opacity",1),Kinetic.Factory.addGetter(Kinetic.Node,"name"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"name"),Kinetic.Factory.addGetter(Kinetic.Node,"id"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"id"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"rotation",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"scale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Node,"scaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"skew",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"skewY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node,"offset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Node,"offsetY",0),Kinetic.Factory.addSetter(Kinetic.Node,"dragDistance"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"dragDistance"),Kinetic.Factory.addSetter(Kinetic.Node,"width",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"width"),Kinetic.Factory.addSetter(Kinetic.Node,"height",0),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"height"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"listening","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"filters",void 0,function(a){return this._filterUpToDate=!1,a}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"visible","inherit"),Kinetic.Factory.addGetterSetter(Kinetic.Node,"transformsEnabled","all"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"size"),Kinetic.Factory.backCompat(Kinetic.Node,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),Kinetic.Collection.mapMethods(Kinetic.Node)}(),function(){Kinetic.Filters.Grayscale=function(a){var b,c,d=a.data,e=d.length;for(b=0;e>b;b+=4)c=.34*d[b]+.5*d[b+1]+.16*d[b+2],d[b]=c,d[b+1]=c,d[b+2]=c}}(),function(){Kinetic.Filters.Brighten=function(a){var b,c=255*this.brightness(),d=a.data,e=d.length;for(b=0;e>b;b+=4)d[b]+=c,d[b+1]+=c,d[b+2]+=c},Kinetic.Factory.addGetterSetter(Kinetic.Node,"brightness",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Invert=function(a){var b,c=a.data,d=c.length;for(b=0;d>b;b+=4)c[b]=255-c[b],c[b+1]=255-c[b+1],c[b+2]=255-c[b+2]}}(),function(){function a(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function b(b,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=b.data,E=b.width,F=b.height,G=e+e+1,H=E-1,I=F-1,J=e+1,K=J*(J+1)/2,L=new a,M=null,N=L,O=null,P=null,Q=c[e],R=d[e];for(h=1;G>h;h++)N=N.next=new a,h==J&&(M=N);for(N.next=L,l=k=0,g=0;F>g;g++){for(u=v=w=x=m=n=o=p=0,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(h=1;J>h;h++)i=k+((h>H?H:h)<<2),m+=(N.r=y=D[i])*(C=J-h),n+=(N.g=z=D[i+1])*C,o+=(N.b=A=D[i+2])*C,p+=(N.a=B=D[i+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next;for(O=L,P=M,f=0;E>f;f++)D[k+3]=B=p*Q>>R,0!==B?(B=255/B,D[k]=(m*Q>>R)*B,D[k+1]=(n*Q>>R)*B,D[k+2]=(o*Q>>R)*B):D[k]=D[k+1]=D[k+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=l+((i=f+e+1)<H?i:H)<<2,u+=O.r=D[i],v+=O.g=D[i+1],w+=O.b=D[i+2],x+=O.a=D[i+3],m+=u,n+=v,o+=w,p+=x,O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=4;l+=E}for(f=0;E>f;f++){for(v=w=x=u=n=o=p=m=0,k=f<<2,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(j=E,h=1;e>=h;h++)k=j+f<<2,m+=(N.r=y=D[k])*(C=J-h),n+=(N.g=z=D[k+1])*C,o+=(N.b=A=D[k+2])*C,p+=(N.a=B=D[k+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next,I>h&&(j+=E);for(k=f,O=L,P=M,g=0;F>g;g++)i=k<<2,D[i+3]=B=p*Q>>R,B>0?(B=255/B,D[i]=(m*Q>>R)*B,D[i+1]=(n*Q>>R)*B,D[i+2]=(o*Q>>R)*B):D[i]=D[i+1]=D[i+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=f+((i=g+J)<I?i:I)*E<<2,m+=u+=O.r=D[i],n+=v+=O.g=D[i+1],o+=w+=O.b=D[i+2],p+=x+=O.a=D[i+3],O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=E}}var c=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],d=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];Kinetic.Filters.Blur=function(a){var c=Math.round(this.blurRadius());c>0&&b(a,c)},Kinetic.Factory.addGetterSetter(Kinetic.Node,"blurRadius",0,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a,b,c){var d=4*(c*a.width+b),e=[];return e.push(a.data[d++],a.data[d++],a.data[d++],a.data[d++]),e}function b(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2))}function c(a){for(var b=[0,0,0],c=0;c<a.length;c++)b[0]+=a[c][0],b[1]+=a[c][1],b[2]+=a[c][2];return b[0]/=a.length,b[1]/=a.length,b[2]/=a.length,b}function d(d,e){var f=a(d,0,0),g=a(d,d.width-1,0),h=a(d,0,d.height-1),i=a(d,d.width-1,d.height-1),j=e||10;if(b(f,g)<j&&b(g,i)<j&&b(i,h)<j&&b(h,f)<j){for(var k=c([g,f,i,h]),l=[],m=0;m<d.width*d.height;m++){var n=b(k,[d.data[4*m],d.data[4*m+1],d.data[4*m+2]]);l[m]=j>n?0:255}return l}}function e(a,b){for(var c=0;c<a.width*a.height;c++)a.data[4*c+3]=b[c]}function f(a,b,c){for(var d=[1,1,1,1,0,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=2040===k?255:0}return g}function g(a,b,c){for(var d=[1,1,1,1,1,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k>=1020?255:0}return g}function h(a,b,c){for(var d=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k}return g}Kinetic.Filters.Mask=function(a){var b=this.threshold(),c=d(a,b);return c&&(c=f(c,a.width,a.height),c=g(c,a.width,a.height),c=h(c,a.width,a.height),e(a,c)),a},Kinetic.Factory.addGetterSetter(Kinetic.Node,"threshold",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.RGB=function(a){var b,c,d=a.data,e=d.length,f=this.red(),g=this.green(),h=this.blue();for(b=0;e>b;b+=4)c=(.34*d[b]+.5*d[b+1]+.16*d[b+2])/255,d[b]=c*f,d[b+1]=c*g,d[b+2]=c*h,d[b+3]=d[b+3]},Kinetic.Factory.addGetterSetter(Kinetic.Node,"red",0,function(a){return this._filterUpToDate=!1,a>255?255:0>a?0:Math.round(a)}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"green",0,function(a){return this._filterUpToDate=!1,a>255?255:0>a?0:Math.round(a)}),Kinetic.Factory.addGetterSetter(Kinetic.Node,"blue",0,Kinetic.Validators.RGBComponent,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.HSV=function(a){var b,c,d,e,f,g=a.data,h=g.length,i=Math.pow(2,this.value()),j=Math.pow(2,this.saturation()),k=Math.abs(this.hue()+360)%360,l=i*j*Math.cos(k*Math.PI/180),m=i*j*Math.sin(k*Math.PI/180),n=.299*i+.701*l+.167*m,o=.587*i-.587*l+.33*m,p=.114*i-.114*l-.497*m,q=.299*i-.299*l-.328*m,r=.587*i+.413*l+.035*m,s=.114*i-.114*l+.293*m,t=.299*i-.3*l+1.25*m,u=.587*i-.586*l-1.05*m,v=.114*i+.886*l-.2*m;for(b=0;h>b;b+=4)c=g[b+0],d=g[b+1],e=g[b+2],f=g[b+3],g[b+0]=n*c+o*d+p*e,g[b+1]=q*c+r*d+s*e,g[b+2]=t*c+u*d+v*e,g[b+3]=f},Kinetic.Factory.addGetterSetter(Kinetic.Node,"hue",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"saturation",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"value",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Factory.addGetterSetter(Kinetic.Node,"hue",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"saturation",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"luminance",0,null,Kinetic.Factory.afterSetFilter),Kinetic.Filters.HSL=function(a){var b,c,d,e,f,g=a.data,h=g.length,i=1,j=Math.pow(2,this.saturation()),k=Math.abs(this.hue()+360)%360,l=127*this.luminance(),m=i*j*Math.cos(k*Math.PI/180),n=i*j*Math.sin(k*Math.PI/180),o=.299*i+.701*m+.167*n,p=.587*i-.587*m+.33*n,q=.114*i-.114*m-.497*n,r=.299*i-.299*m-.328*n,s=.587*i+.413*m+.035*n,t=.114*i-.114*m+.293*n,u=.299*i-.3*m+1.25*n,v=.587*i-.586*m-1.05*n,w=.114*i+.886*m-.2*n;for(b=0;h>b;b+=4)c=g[b+0],d=g[b+1],e=g[b+2],f=g[b+3],g[b+0]=o*c+p*d+q*e+l,g[b+1]=r*c+s*d+t*e+l,g[b+2]=u*c+v*d+w*e+l,g[b+3]=f}}(),function(){Kinetic.Filters.Emboss=function(a){var b=10*this.embossStrength(),c=255*this.embossWhiteLevel(),d=this.embossDirection(),e=this.embossBlend(),f=0,g=0,h=a.data,i=a.width,j=a.height,k=4*i,l=j;switch(d){case"top-left":f=-1,g=-1;break;case"top":f=-1,g=0;break;case"top-right":f=-1,g=1;break;case"right":f=0,g=1;break;case"bottom-right":f=1,g=1;break;case"bottom":f=1,g=0;break;case"bottom-left":f=1,g=-1;break;case"left":f=0,g=-1}do{var m=(l-1)*k,n=f;1>l+n&&(n=0),l+n>j&&(n=0);var o=(l-1+n)*i*4,p=i;do{var q=m+4*(p-1),r=g;1>p+r&&(r=0),p+r>i&&(r=0);var s=o+4*(p-1+r),t=h[q]-h[s],u=h[q+1]-h[s+1],v=h[q+2]-h[s+2],w=t,x=w>0?w:-w,y=u>0?u:-u,z=v>0?v:-v;if(y>x&&(w=u),z>x&&(w=v),w*=b,e){var A=h[q]+w,B=h[q+1]+w,C=h[q+2]+w;h[q]=A>255?255:0>A?0:A,h[q+1]=B>255?255:0>B?0:B,h[q+2]=C>255?255:0>C?0:C}else{var D=c-w;0>D?D=0:D>255&&(D=255),h[q]=h[q+1]=h[q+2]=D}}while(--p)}while(--l)},Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossStrength",.5,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossWhiteLevel",.5,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossDirection","top-left",null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"embossBlend",!1,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a,b,c,d,e){var f,g=c-b,h=e-d;return 0===g?d+h/2:0===h?d:(f=(a-b)/g,f=h*f+d)}Kinetic.Filters.Enhance=function(b){var c,d,e,f,g=b.data,h=g.length,i=g[0],j=i,k=g[1],l=k,m=g[2],n=m,o=g[3],p=o,q=this.enhance();if(0!==q){for(f=0;h>f;f+=4)c=g[f+0],i>c?i=c:c>j&&(j=c),d=g[f+1],k>d?k=d:d>l&&(l=d),e=g[f+2],m>e?m=e:e>n&&(n=e);j===i&&(j=255,i=0),l===k&&(l=255,k=0),n===m&&(n=255,m=0),p===o&&(p=255,o=0);var r,s,t,u,v,w,x,y,z,A,B,C;for(q>0?(s=j+q*(255-j),t=i-q*(i-0),v=l+q*(255-l),w=k-q*(k-0),y=n+q*(255-n),C=m-q*(m-0),B=p+q*(255-p),z=o-q*(o-0)):(r=.5*(j+i),s=j+q*(j-r),t=i+q*(i-r),u=.5*(l+k),v=l+q*(l-u),w=k+q*(k-u),x=.5*(n+m),y=n+q*(n-x),C=m+q*(m-x),A=.5*(p+o),B=p+q*(p-A),z=o+q*(o-A)),f=0;h>f;f+=4)g[f+0]=a(g[f+0],i,j,t,s),g[f+1]=a(g[f+1],k,l,w,v),g[f+2]=a(g[f+2],m,n,C,y)}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"enhance",0,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Posterize=function(a){var b,c=Math.round(254*this.levels())+1,d=a.data,e=d.length,f=255/c;for(b=0;e>b;b+=1)d[b]=Math.floor(d[b]/f)*f},Kinetic.Factory.addGetterSetter(Kinetic.Node,"levels",.5,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Noise=function(a){var b,c=255*this.noise(),d=a.data,e=d.length,f=c/2;for(b=0;e>b;b+=4)d[b+0]+=f-2*f*Math.random(),d[b+1]+=f-2*f*Math.random(),d[b+2]+=f-2*f*Math.random()},Kinetic.Factory.addGetterSetter(Kinetic.Node,"noise",.2,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Pixelate=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=Math.ceil(this.pixelSize()),q=a.width,r=a.height,s=Math.ceil(q/p),t=Math.ceil(r/p);for(a=a.data,m=0;s>m;m+=1)for(n=0;t>n;n+=1){for(e=0,f=0,g=0,h=0,i=m*p,j=i+p,k=n*p,l=k+p,o=0,b=i;j>b;b+=1)if(!(b>=q))for(c=k;l>c;c+=1)c>=r||(d=4*(q*c+b),e+=a[d+0],f+=a[d+1],g+=a[d+2],h+=a[d+3],o+=1);for(e/=o,f/=o,g/=o,b=i;j>b;b+=1)if(!(b>=q))for(c=k;l>c;c+=1)c>=r||(d=4*(q*c+b),a[d+0]=e,a[d+1]=f,a[d+2]=g,a[d+3]=h)}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"pixelSize",8,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Threshold=function(a){var b,c=255*this.threshold(),d=a.data,e=d.length;for(b=0;e>b;b+=1)d[b]=d[b]<c?0:255},Kinetic.Factory.addGetterSetter(Kinetic.Node,"threshold",.5,null,Kinetic.Factory.afterSetFilter)}(),function(){Kinetic.Filters.Sepia=function(a){var b,c,d,e,f,g,h,i,j,k=a.data,l=a.width,m=a.height,n=4*l;do{b=(m-1)*n,c=l;do d=b+4*(c-1),e=k[d],f=k[d+1],g=k[d+2],h=.393*e+.769*f+.189*g,i=.349*e+.686*f+.168*g,j=.272*e+.534*f+.131*g,k[d]=h>255?255:h,k[d+1]=i>255?255:i,k[d+2]=j>255?255:j,k[d+3]=k[d+3];while(--c)}while(--m)}}(),function(){Kinetic.Filters.Solarize=function(a){var b=a.data,c=a.width,d=a.height,e=4*c,f=d;do{var g=(f-1)*e,h=c;do{var i=g+4*(h-1),j=b[i],k=b[i+1],l=b[i+2];j>127&&(j=255-j),k>127&&(k=255-k),l>127&&(l=255-l),b[i]=j,b[i+1]=k,b[i+2]=l}while(--h)}while(--f)}}(),function(){var a=function(a,b,c){var d,e,f,g,h=a.data,i=b.data,j=a.width,k=a.height,l=c.polarCenterX||j/2,m=c.polarCenterY||k/2,n=0,o=0,p=0,q=0,r=Math.sqrt(l*l+m*m);e=j-l,f=k-m,g=Math.sqrt(e*e+f*f),r=g>r?g:r;var s,t,u,v,w=k,x=j,y=360/x*Math.PI/180;for(t=0;x>t;t+=1)for(u=Math.sin(t*y),v=Math.cos(t*y),s=0;w>s;s+=1)e=Math.floor(l+r*s/w*v),f=Math.floor(m+r*s/w*u),d=4*(f*j+e),n=h[d+0],o=h[d+1],p=h[d+2],q=h[d+3],d=4*(t+s*j),i[d+0]=n,i[d+1]=o,i[d+2]=p,i[d+3]=q},b=function(a,b,c){var d,e,f,g,h,i,j=a.data,k=b.data,l=a.width,m=a.height,n=c.polarCenterX||l/2,o=c.polarCenterY||m/2,p=0,q=0,r=0,s=0,t=Math.sqrt(n*n+o*o);e=l-n,f=m-o,i=Math.sqrt(e*e+f*f),t=i>t?i:t;var u,v,w,x,y=m,z=l,A=c.polarRotation||0;for(e=0;l>e;e+=1)for(f=0;m>f;f+=1)g=e-n,h=f-o,u=Math.sqrt(g*g+h*h)*y/t,v=(180*Math.atan2(h,g)/Math.PI+360+A)%360,v=v*z/360,w=Math.floor(v),x=Math.floor(u),d=4*(x*l+w),p=j[d+0],q=j[d+1],r=j[d+2],s=j[d+3],d=4*(f*l+e),k[d+0]=p,k[d+1]=q,k[d+2]=r,k[d+3]=s},c=Kinetic.Util.createCanvasElement();Kinetic.Filters.Kaleidoscope=function(d){var e,f,g,h,i,j,k,l,m,n,o=d.width,p=d.height,q=Math.round(this.kaleidoscopePower()),r=Math.round(this.kaleidoscopeAngle()),s=Math.floor(o*(r%360)/360);if(!(1>q)){c.width=o,c.height=p;var t=c.getContext("2d").getImageData(0,0,o,p);a(d,t,{polarCenterX:o/2,polarCenterY:p/2});for(var u=o/Math.pow(2,q);8>=u;)u=2*u,q-=1;u=Math.ceil(u);var v=u,w=0,x=v,y=1;for(s+u>o&&(w=v,x=0,y=-1),f=0;p>f;f+=1)for(e=w;e!==x;e+=y)g=Math.round(e+s)%o,m=4*(o*f+g),i=t.data[m+0],j=t.data[m+1],k=t.data[m+2],l=t.data[m+3],n=4*(o*f+e),t.data[n+0]=i,t.data[n+1]=j,t.data[n+2]=k,t.data[n+3]=l;for(f=0;p>f;f+=1)for(v=Math.floor(u),h=0;q>h;h+=1){for(e=0;v+1>e;e+=1)m=4*(o*f+e),i=t.data[m+0],j=t.data[m+1],k=t.data[m+2],l=t.data[m+3],n=4*(o*f+2*v-e-1),t.data[n+0]=i,t.data[n+1]=j,t.data[n+2]=k,t.data[n+3]=l;v*=2}b(t,d,{polarRotation:0})}},Kinetic.Factory.addGetterSetter(Kinetic.Node,"kaleidoscopePower",2,null,Kinetic.Factory.afterSetFilter),Kinetic.Factory.addGetterSetter(Kinetic.Node,"kaleidoscopeAngle",0,null,Kinetic.Factory.afterSetFilter)}(),function(){function a(a){Kinetic.root.setTimeout(a,1e3/60)}function b(){return e.apply(Kinetic.root,arguments)}var c=500,d=function(){return Kinetic.root.performance&&Kinetic.root.performance.now?function(){return Kinetic.root.performance.now()}:function(){return(new Date).getTime()}}(),e=function(){return Kinetic.root.requestAnimationFrame||Kinetic.root.webkitRequestAnimationFrame||Kinetic.root.mozRequestAnimationFrame||Kinetic.root.oRequestAnimationFrame||Kinetic.root.msRequestAnimationFrame||a}();Kinetic.Animation=function(a,b){var c=Kinetic.Animation;this.func=a,this.setLayers(b),this.id=c.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:d()}},Kinetic.Animation.prototype={setLayers:function(a){var b=[];b=a?a.length>0?a:[a]:[],this.layers=b},getLayers:function(){return this.layers},addLayer:function(a){var b,c,d=this.layers;if(d){for(b=d.length,c=0;b>c;c++)if(d[c]._id===a._id)return!1}else this.layers=[];return this.layers.push(a),!0},isRunning:function(){var a,b=Kinetic.Animation,c=b.animations,d=c.length;for(a=0;d>a;a++)if(c[a].id===this.id)return!0;return!1},start:function(){var a=Kinetic.Animation;this.stop(),this.frame.timeDiff=0,this.frame.lastTime=d(),a._addAnimation(this)},stop:function(){Kinetic.Animation._removeAnimation(this)},_updateFrameObject:function(a){this.frame.timeDiff=a-this.frame.lastTime,this.frame.lastTime=a,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}},Kinetic.Animation.animations=[],Kinetic.Animation.animIdCounter=0,Kinetic.Animation.animRunning=!1,Kinetic.Animation._addAnimation=function(a){this.animations.push(a),this._handleAnimation()},Kinetic.Animation._removeAnimation=function(a){var b,c=a.id,d=this.animations,e=d.length;for(b=0;e>b;b++)if(d[b].id===c){this.animations.splice(b,1);break}},Kinetic.Animation._runFrames=function(){var a,b,c,e,f,g,h,i,j={},k=this.animations;for(e=0;e<k.length;e++){for(a=k[e],b=a.layers,c=a.func,a._updateFrameObject(d()),g=b.length,f=0;g>f;f++)h=b[f],void 0!==h._id&&(j[h._id]=h);c&&c.call(a,a.frame)}for(i in j)j[i].draw()},Kinetic.Animation._animationLoop=function(){var a=Kinetic.Animation;a.animations.length?(b(a._animationLoop),a._runFrames()):a.animRunning=!1},Kinetic.Animation._handleAnimation=function(){var a=this;this.animRunning||(this.animRunning=!0,a._animationLoop())};var f=Kinetic.Node.prototype.moveTo;Kinetic.Node.prototype.moveTo=function(a){f.call(this,a)},Kinetic.Layer.prototype.batchDraw=function(){var a=this,b=Kinetic.Animation;this.batchAnim||(this.batchAnim=new b(function(){a.lastBatchDrawTime&&d()-a.lastBatchDrawTime>c&&a.batchAnim.stop()},this)),this.lastBatchDrawTime=d(),this.batchAnim.isRunning()||(this.draw(),this.batchAnim.start())},Kinetic.Stage.prototype.batchDraw=function(){this.getChildren().each(function(a){a.batchDraw()})}}((1,eval)("this")),function(){var a={node:1,duration:1,easing:1,onFinish:1,yoyo:1},b=1,c=2,d=3,e=0;Kinetic.Tween=function(b){var c,d=this,g=b.node,h=g._id,i=b.duration||1,j=b.easing||Kinetic.Easings.Linear,k=!!b.yoyo;this.node=g,this._id=e++,this.anim=new Kinetic.Animation(function(){d.tween.onEnterFrame()},g.getLayer()),this.tween=new f(c,function(a){d._tweenFunc(a)},j,0,1,1e3*i,k),this._addListeners(),Kinetic.Tween.attrs[h]||(Kinetic.Tween.attrs[h]={}),Kinetic.Tween.attrs[h][this._id]||(Kinetic.Tween.attrs[h][this._id]={}),Kinetic.Tween.tweens[h]||(Kinetic.Tween.tweens[h]={});for(c in b)void 0===a[c]&&this._addAttr(c,b[c]);this.reset(),this.onFinish=b.onFinish,this.onReset=b.onReset},Kinetic.Tween.attrs={},Kinetic.Tween.tweens={},Kinetic.Tween.prototype={_addAttr:function(a,b){var c,d,e,f,g,h=this.node,i=h._id;if(e=Kinetic.Tween.tweens[i][a],e&&delete Kinetic.Tween.attrs[i][e][a],c=h.getAttr(a),Kinetic.Util._isArray(b))for(d=[],g=b.length,f=0;g>f;f++)d.push(b[f]-c[f]);else d=b-c;Kinetic.Tween.attrs[i][this._id][a]={start:c,diff:d},Kinetic.Tween.tweens[i][a]=this._id},_tweenFunc:function(a){var b,c,d,e,f,g,h,i=this.node,j=Kinetic.Tween.attrs[i._id][this._id];for(b in j){if(c=j[b],d=c.start,e=c.diff,Kinetic.Util._isArray(d))for(f=[],h=d.length,g=0;h>g;g++)f.push(d[g]+e[g]*a);else f=d+e*a;i.setAttr(b,f)}},_addListeners:function(){var a=this;this.tween.onPlay=function(){a.anim.start()},this.tween.onReverse=function(){a.anim.start()},this.tween.onPause=function(){a.anim.stop()},this.tween.onFinish=function(){a.onFinish&&a.onFinish()},this.tween.onReset=function(){a.onReset&&a.onReset()}},play:function(){return this.tween.play(),this},reverse:function(){return this.tween.reverse(),this},reset:function(){this.node;return this.tween.reset(),this},seek:function(a){this.node;return this.tween.seek(1e3*a),this},pause:function(){return this.tween.pause(),this},finish:function(){this.node;return this.tween.finish(),this},destroy:function(){var a,b=this.node._id,c=this._id,d=Kinetic.Tween.tweens[b];this.pause();for(a in d)delete Kinetic.Tween.tweens[b][a];delete Kinetic.Tween.attrs[b][c]}};var f=function(a,b,c,d,e,f,g){this.prop=a,this.propFunc=b,this.begin=d,this._pos=d,this.duration=f,this._change=0,this.prevPos=0,this.yoyo=g,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=c,this._change=e-this.begin,this.pause()};f.prototype={fire:function(a){var b=this[a];b&&b()},setTime:function(a){a>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():0>a?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=a,this.update())},getTime:function(){return this._time},setPosition:function(a){this.prevPos=this._pos,this.propFunc(a),this._pos=a},getPosition:function(a){return void 0===a&&(a=this._time),this.func(a,this.begin,this._change,this.duration)},play:function(){this.state=c,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")},reverse:function(){this.state=d,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")},seek:function(a){this.pause(),this._time=a,this.update(),this.fire("onSeek")},reset:function(){this.pause(),this._time=0,this.update(),this.fire("onReset")},finish:function(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")},update:function(){this.setPosition(this.getPosition(this._time))},onEnterFrame:function(){var a=this.getTimer()-this._startTime;this.state===c?this.setTime(a):this.state===d&&this.setTime(this.duration-a)},pause:function(){this.state=b,this.fire("onPause")},getTimer:function(){return(new Date).getTime()}},Kinetic.Easings={BackEaseIn:function(a,b,c,d){var e=1.70158;return c*(a/=d)*a*((e+1)*a-e)+b},BackEaseOut:function(a,b,c,d){var e=1.70158;return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},BackEaseInOut:function(a,b,c,d){var e=1.70158;return(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},ElasticEaseIn:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f))+b)},ElasticEaseOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin(2*(a*d-g)*Math.PI/f)+c+b)},ElasticEaseInOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:2==(a/=d/2)?b+c:(f||(f=.3*d*1.5),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*e*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f)+b:e*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*d-g)*Math.PI/f)*.5+c+b)},BounceEaseOut:function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},BounceEaseIn:function(a,b,c,d){return c-Kinetic.Easings.BounceEaseOut(d-a,0,c,d)+b},BounceEaseInOut:function(a,b,c,d){return d/2>a?.5*Kinetic.Easings.BounceEaseIn(2*a,0,c,d)+b:.5*Kinetic.Easings.BounceEaseOut(2*a-d,0,c,d)+.5*c+b},EaseIn:function(a,b,c,d){return c*(a/=d)*a+b},EaseOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},EaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},StrongEaseIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},StrongEaseOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},StrongEaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},Linear:function(a,b,c,d){return c*a/d+b}}}(),function(){Kinetic.DD={anim:new Kinetic.Animation,isDragging:!1,offset:{x:0,y:0},node:null,_drag:function(a){var b=Kinetic.DD,c=b.node;if(c){if(!b.isDragging){var d=c.getStage().getPointerPosition(),e=c.dragDistance(),f=Math.max(Math.abs(d.x-b.startPointerPos.x),Math.abs(d.y-b.startPointerPos.y));if(e>f)return}c._setDragPosition(a),b.isDragging||(b.isDragging=!0,c.fire("dragstart",{type:"dragstart",target:c,evt:a},!0)),c.fire("dragmove",{type:"dragmove",target:c,evt:a},!0)}},_endDragBefore:function(a){var b,c,d=Kinetic.DD,e=d.node;e&&(b=e.nodeType,c=e.getLayer(),d.anim.stop(),d.isDragging&&(d.isDragging=!1,Kinetic.listenClickTap=!1,a&&(a.dragEndNode=e)),delete d.node,(c||e).draw())},_endDragAfter:function(a){a=a||{};var b=a.dragEndNode;a&&b&&b.fire("dragend",{type:"dragend",target:b,evt:a},!0)}},Kinetic.Node.prototype.startDrag=function(){var a=Kinetic.DD,b=this.getStage(),c=this.getLayer(),d=b.getPointerPosition(),e=this.getAbsolutePosition();d&&(a.node&&a.node.stopDrag(),a.node=this,a.startPointerPos=d,a.offset.x=d.x-e.x,a.offset.y=d.y-e.y,a.anim.setLayers(c||this.getLayers()),a.anim.start(),this._setDragPosition())},Kinetic.Node.prototype._setDragPosition=function(a){var b=Kinetic.DD,c=this.getStage().getPointerPosition(),d=this.getDragBoundFunc();if(c){var e={x:c.x-b.offset.x,y:c.y-b.offset.y};void 0!==d&&(e=d.call(this,e,a)),this.setAbsolutePosition(e)}},Kinetic.Node.prototype.stopDrag=function(){var a=Kinetic.DD,b={};a._endDragBefore(b),a._endDragAfter(b)},Kinetic.Node.prototype.setDraggable=function(a){this._setAttr("draggable",a),this._dragChange()};var a=Kinetic.Node.prototype.destroy;Kinetic.Node.prototype.destroy=function(){var b=Kinetic.DD;b.node&&b.node._id===this._id&&this.stopDrag(),a.call(this)},Kinetic.Node.prototype.isDragging=function(){var a=Kinetic.DD;return a.node&&a.node._id===this._id&&a.isDragging},Kinetic.Node.prototype._listenDrag=function(){var a=this;this._dragCleanup(),"Stage"===this.getClassName()?this.on("contentMousedown.kinetic contentTouchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)}):this.on("mousedown.kinetic touchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)})},Kinetic.Node.prototype._dragChange=function(){if(this.attrs.draggable)this._listenDrag();else{this._dragCleanup();var a=this.getStage(),b=Kinetic.DD;a&&b.node&&b.node._id===this._id&&b.node.stopDrag()}},Kinetic.Node.prototype._dragCleanup=function(){"Stage"===this.getClassName()?(this.off("contentMousedown.kinetic"),this.off("contentTouchstart.kinetic")):(this.off("mousedown.kinetic"),this.off("touchstart.kinetic"))},Kinetic.Factory.addGetterSetter(Kinetic.Node,"dragBoundFunc"),Kinetic.Factory.addGetter(Kinetic.Node,"draggable",!1),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node,"draggable");var b=Kinetic.document.documentElement;b.addEventListener("mouseup",Kinetic.DD._endDragBefore,!0),b.addEventListener("touchend",Kinetic.DD._endDragBefore,!0),b.addEventListener("mouseup",Kinetic.DD._endDragAfter,!1),b.addEventListener("touchend",Kinetic.DD._endDragAfter,!1)}(),function(){Kinetic.Util.addMethods(Kinetic.Container,{__init:function(a){this.children=new Kinetic.Collection,Kinetic.Node.call(this,a)},getChildren:function(a){if(a){var b=new Kinetic.Collection;return this.children.each(function(c){a(c)&&b.push(c)}),b}return this.children},hasChildren:function(){return this.getChildren().length>0},removeChildren:function(){for(var a,b=Kinetic.Collection.toCollection(this.children),c=0;c<b.length;c++)a=b[c],delete a.parent,a.index=0,a.hasChildren()&&a.removeChildren(),a.remove();return b=null,this.children=new Kinetic.Collection,this},destroyChildren:function(){for(var a,b=Kinetic.Collection.toCollection(this.children),c=0;c<b.length;c++)a=b[c],delete a.parent,a.index=0,a.destroy();return b=null,this.children=new Kinetic.Collection,this},add:function(a){if(!(arguments.length>1)){if(a.getParent())return void a.moveTo(this);var b=this.children;return this._validateAdd(a),a.index=b.length,a.parent=this,b.push(a),this._fire("add",{child:a}),this}for(var c=0;c<arguments.length;c++)this.add(arguments[c])},destroy:function(){this.hasChildren()&&this.destroyChildren(),Kinetic.Node.prototype.destroy.call(this)},find:function(a){var b,c,d,e,f,g,h,i=[],j=a.replace(/ /g,"").split(","),k=j.length;for(b=0;k>b;b++)if(d=j[b],"#"===d.charAt(0))f=this._getNodeById(d.slice(1)),f&&i.push(f);else if("."===d.charAt(0))e=this._getNodesByName(d.slice(1)),i=i.concat(e);else for(g=this.getChildren(),h=g.length,c=0;h>c;c++)i=i.concat(g[c]._get(d));return Kinetic.Collection.toCollection(i)},_getNodeById:function(a){var b=Kinetic.ids[a];return void 0!==b&&this.isAncestorOf(b)?b:null},_getNodesByName:function(a){var b=Kinetic.names[a]||[];return this._getDescendants(b)},_get:function(a){for(var b=Kinetic.Node.prototype._get.call(this,a),c=this.getChildren(),d=c.length,e=0;d>e;e++)b=b.concat(c[e]._get(a));return b},toObject:function(){var a=Kinetic.Node.prototype.toObject.call(this);a.children=[];for(var b=this.getChildren(),c=b.length,d=0;c>d;d++){var e=b[d];a.children.push(e.toObject())}return a},_getDescendants:function(a){for(var b=[],c=a.length,d=0;c>d;d++){var e=a[d];this.isAncestorOf(e)&&b.push(e)}return b},isAncestorOf:function(a){for(var b=a.getParent();b;){if(b._id===this._id)return!0;b=b.getParent()}return!1},clone:function(a){var b=Kinetic.Node.prototype.clone.call(this,a);return this.getChildren().each(function(a){b.add(a.clone())}),b},getAllIntersections:function(a){var b=[];return this.find("Shape").each(function(c){c.isVisible()&&c.intersects(a)&&b.push(c)}),b},_setChildrenIndices:function(){this.children.each(function(a,b){a.index=b})},drawScene:function(a,b){var c=this.getLayer(),d=a||c&&c.getCanvas(),e=d&&d.getContext(),f=this._cache.canvas,g=f&&f.scene;return this.isVisible()&&(g?this._drawCachedSceneCanvas(e):this._drawChildren(d,"drawScene",b)),this
},drawHit:function(a,b){var c=this.getLayer(),d=a||c&&c.hitCanvas,e=d&&d.getContext(),f=this._cache.canvas,g=f&&f.hit;return this.shouldDrawHit()&&(g?this._drawCachedHitCanvas(e):this._drawChildren(d,"drawHit",b)),this},_drawChildren:function(a,b,c){var d,e,f=this.getLayer(),g=a&&a.getContext(),h=this.getClipWidth(),i=this.getClipHeight(),j=h&&i;j&&f&&(d=this.getClipX(),e=this.getClipY(),g.save(),f._applyTransform(this,g),g.beginPath(),g.rect(d,e,h,i),g.clip(),g.reset()),this.children.each(function(d){d[b](a,c)}),j&&g.restore()}}),Kinetic.Util.extend(Kinetic.Container,Kinetic.Node),Kinetic.Container.prototype.get=Kinetic.Container.prototype.find,Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container,"clip",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipX"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipY"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipWidth"),Kinetic.Factory.addGetterSetter(Kinetic.Container,"clipHeight"),Kinetic.Collection.mapMethods(Kinetic.Container)}(),function(){function a(a){a.fill()}function b(a){a.stroke()}function c(a){a.fill()}function d(a){a.stroke()}function e(){this._clearCache(f)}var f="hasShadow";Kinetic.Util.addMethods(Kinetic.Shape,{__init:function(f){this.nodeType="Shape",this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=c,this._strokeFuncHit=d;for(var g,h=Kinetic.shapes;;)if(g=Kinetic.Util.getRandomColor(),g&&!(g in h))break;this.colorKey=g,h[g]=this,Kinetic.Node.call(this,f),this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic",e)},hasChildren:function(){return!1},getChildren:function(){return[]},getContext:function(){return this.getLayer().getContext()},getCanvas:function(){return this.getLayer().getCanvas()},hasShadow:function(){return this._getCache(f,this._hasShadow)},_hasShadow:function(){return this.getShadowEnabled()&&0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())},hasFill:function(){return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())},hasStroke:function(){return!!(this.stroke()||this.strokeRed()||this.strokeGreen()||this.strokeBlue())},_get:function(a){return this.className===a||this.nodeType===a?[this]:[]},intersects:function(a){var b,c=this.getStage(),d=c.bufferHitCanvas;return d.getContext().clear(),this.drawScene(d),b=d.context.getImageData(Math.round(a.x),Math.round(a.y),1,1).data,b[3]>0},destroy:function(){Kinetic.Node.prototype.destroy.call(this),delete Kinetic.shapes[this.colorKey]},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasFill()&&this.hasStroke()&&this.getStage()},drawScene:function(a,b){var c,d,e,f=this.getLayer(),g=a||f.getCanvas(),h=g.getContext(),i=this._cache.canvas,j=this.sceneFunc(),k=this.hasShadow();return this.isVisible()&&(i?this._drawCachedSceneCanvas(h):j&&(h.save(),this._useBufferCanvas()?(c=this.getStage(),d=c.bufferCanvas,e=d.getContext(),e.clear(),e.save(),e._applyLineJoin(this),f._applyTransform(this,e,b),j.call(this,e),e.restore(),k&&(h.save(),h._applyShadow(this),h.drawImage(d._canvas,0,0),h.restore()),h._applyOpacity(this),h.drawImage(d._canvas,0,0)):(h._applyLineJoin(this),f._applyTransform(this,h,b),k&&(h.save(),h._applyShadow(this),j.call(this,h),h.restore()),h._applyOpacity(this),j.call(this,h)),h.restore())),this},drawHit:function(a,b){var c=this.getLayer(),d=a||c.hitCanvas,e=d.getContext(),f=this.hitFunc()||this.sceneFunc(),g=this._cache.canvas,h=g&&g.hit;return this.shouldDrawHit()&&(h?this._drawCachedHitCanvas(e):f&&(e.save(),e._applyLineJoin(this),c._applyTransform(this,e,b),f.call(this,e),e.restore())),this},drawHitFromCache:function(a){var b,c,d,e,f,g,h,i,j=a||0,k=this._cache.canvas,l=this._getCachedSceneCanvas(),m=l.getContext(),n=k.hit,o=n.getContext(),p=l.getWidth(),q=l.getHeight();o.clear();try{for(b=m.getImageData(0,0,p,q),c=b.data,d=o.getImageData(0,0,p,q),e=d.data,f=c.length,g=Kinetic.Util._hexToRgb(this.colorKey),h=0;f>h;h+=4)i=c[h+3],i>j&&(e[h]=g.r,e[h+1]=g.g,e[h+2]=g.b,e[h+3]=255);o.putImageData(d,0,0)}catch(r){Kinetic.Util.warn("Unable to draw hit graph from cached scene canvas. "+r.message)}return this}}),Kinetic.Util.extend(Kinetic.Shape,Kinetic.Node),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"stroke"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeWidth",2),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineJoin"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"lineCap"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"sceneFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"hitFunc"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dash"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowColor"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowBlur"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOpacity"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"shadowOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowOffsetY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternImage"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fill"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRed",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillGreen",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillBlue",0,Kinetic.Validators.RGBComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillAlpha",1,Kinetic.Validators.alphaComponent),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientColorStops"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRepeat","repeat"),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"shadowEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"dashEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"strokeScaleEnabled",!0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPriority","color"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternOffset",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternOffsetY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillPatternScale",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleX",1),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternScaleY",1),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillLinearGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillLinearGradientEndPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientStartPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartPointY",0),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape,"fillRadialGradientEndPoint",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointX",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndPointY",0),Kinetic.Factory.addGetterSetter(Kinetic.Shape,"fillPatternRotation",0),Kinetic.Factory.backCompat(Kinetic.Shape,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"}),Kinetic.Collection.mapMethods(Kinetic.Shape)}(),function(){function a(a,b){a.content.addEventListener(b,function(c){a[I+b](c)},!1)}var b="Stage",c="string",d="px",e="mouseout",f="mouseleave",g="mouseover",h="mouseenter",i="mousemove",j="mousedown",k="mouseup",l="click",m="dblclick",n="touchstart",o="touchend",p="tap",q="dbltap",r="touchmove",s="contentMouseout",t="contentMouseover",u="contentMousemove",v="contentMousedown",w="contentMouseup",x="contentClick",y="contentDblclick",z="contentTouchstart",A="contentTouchend",B="contentDbltap",C="contentTouchmove",D="div",E="relative",F="inline-block",G="kineticjs-content",H=" ",I="_",J="container",K="",L=[j,i,k,e,n,r,o,g],M=L.length;Kinetic.Util.addMethods(Kinetic.Stage,{___init:function(a){this.nodeType=b,Kinetic.Container.call(this,a),this._id=Kinetic.idCounter++,this._buildDOM(),this._bindContentEvents(),this._enableNestedTransforms=!1,Kinetic.stages.push(this)},_validateAdd:function(a){"Layer"!==a.getType()&&Kinetic.Util.error("You may only add layers to the stage.")},setContainer:function(a){if(typeof a===c){var b=a;if(a=Kinetic.document.getElementById(a),!a)throw"Can not find container in document with id "+b}return this._setAttr(J,a),this},shouldDrawHit:function(){return!0},draw:function(){return Kinetic.Node.prototype.draw.call(this),this},setHeight:function(a){return Kinetic.Node.prototype.setHeight.call(this,a),this._resizeDOM(),this},setWidth:function(a){return Kinetic.Node.prototype.setWidth.call(this,a),this._resizeDOM(),this},clear:function(){var a,b=this.children,c=b.length;for(a=0;c>a;a++)b[a].clear();return this},clone:function(a){return a||(a={}),a.container=Kinetic.document.createElement(D),Kinetic.Container.prototype.clone.call(this,a)},destroy:function(){var a=this.content;Kinetic.Container.prototype.destroy.call(this),a&&Kinetic.Util._isInDocument(a)&&this.getContainer().removeChild(a);var b=Kinetic.stages.indexOf(this);b>-1&&Kinetic.stages.splice(b,1)},getPointerPosition:function(){return this.pointerPos},getStage:function(){return this},getContent:function(){return this.content},toDataURL:function(a){function b(e){var f=i[e],j=f.toDataURL(),k=new Kinetic.window.Image;k.onload=function(){h.drawImage(k,0,0),e<i.length-1?b(e+1):a.callback(g.toDataURL(c,d))},k.src=j}a=a||{};var c=a.mimeType||null,d=a.quality||null,e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth(),height:a.height||this.getHeight(),pixelRatio:1}),h=g.getContext()._context,i=this.children;(e||f)&&h.translate(-1*e,-1*f),b(0)},toImage:function(a){var b=a.callback;a.callback=function(a){Kinetic.Util._getImage(a,function(a){b(a)})},this.toDataURL(a)},getIntersection:function(a){var b,c,d=this.getChildren(),e=d.length,f=e-1;for(b=f;b>=0;b--)if(c=d[b].getIntersection(a))return c;return null},_resizeDOM:function(){if(this.content){var a,b,c=this.getWidth(),e=this.getHeight(),f=this.getChildren(),g=f.length;for(this.content.style.width=c+d,this.content.style.height=e+d,this.bufferCanvas.setSize(c,e),this.bufferHitCanvas.setSize(c,e),a=0;g>a;a++)b=f[a],b.getCanvas().setSize(c,e),b.hitCanvas.setSize(c,e),b.draw()}},add:function(a){if(!(arguments.length>1))return Kinetic.Container.prototype.add.call(this,a),a._setCanvasSize(this.width(),this.height()),a.draw(),this.content.appendChild(a.canvas._canvas),this;for(var b=0;b<arguments.length;b++)this.add(arguments[b])},getParent:function(){return null},getLayer:function(){return null},getLayers:function(){return this.getChildren()},_bindContentEvents:function(){for(var b=0;M>b;b++)a(this,L[b])},_mouseover:function(a){Kinetic.UA.mobile||(this._setPointerPosition(a),this._fire(t,{evt:a}))},_mouseout:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.targetShape;b&&!Kinetic.isDragging()&&(b._fireAndBubble(e,{evt:a}),b._fireAndBubble(f,{evt:a}),this.targetShape=null),this.pointerPos=void 0,this._fire(s,{evt:a})}},_mousemove:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()?Kinetic.isDragging()||this.targetShape&&this.targetShape._id===c._id?c._fireAndBubble(i,{evt:a}):(this.targetShape&&(this.targetShape._fireAndBubble(e,{evt:a},c),this.targetShape._fireAndBubble(f,{evt:a},c)),c._fireAndBubble(g,{evt:a},this.targetShape),c._fireAndBubble(h,{evt:a},this.targetShape),this.targetShape=c):this.targetShape&&!Kinetic.isDragging()&&(this.targetShape._fireAndBubble(e,{evt:a}),this.targetShape._fireAndBubble(f,{evt:a}),this.targetShape=null),this._fire(u,{evt:a}),b&&b._drag(a)}a.preventDefault&&a.preventDefault()},_mousedown:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.clickStartShape=b,b._fireAndBubble(j,{evt:a})),this._fire(v,{evt:a})}a.preventDefault&&a.preventDefault()},_mouseup:function(a){if(!Kinetic.UA.mobile){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition()),c=this.clickStartShape,d=!1;Kinetic.inDblClickWindow?(d=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(k,{evt:a}),Kinetic.listenClickTap&&c&&c._id===b._id&&(b._fireAndBubble(l,{evt:a}),d&&b._fireAndBubble(m,{evt:a}))),this._fire(w,{evt:a}),Kinetic.listenClickTap&&(this._fire(x,{evt:a}),d&&this._fire(y,{evt:a})),Kinetic.listenClickTap=!1}a.preventDefault&&a.preventDefault()},_touchstart:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition());Kinetic.listenClickTap=!0,b&&b.isListening()&&(this.tapStartShape=b,b._fireAndBubble(n,{evt:a}),b.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(z,{evt:a})},_touchend:function(a){this._setPointerPosition(a);var b=this.getIntersection(this.getPointerPosition()),c=!1;Kinetic.inDblClickWindow?(c=!0,Kinetic.inDblClickWindow=!1):Kinetic.inDblClickWindow=!0,setTimeout(function(){Kinetic.inDblClickWindow=!1},Kinetic.dblClickWindow),b&&b.isListening()&&(b._fireAndBubble(o,{evt:a}),Kinetic.listenClickTap&&b._id===this.tapStartShape._id&&(b._fireAndBubble(p,{evt:a}),c&&b._fireAndBubble(q,{evt:a})),b.isListening()&&a.preventDefault&&a.preventDefault()),Kinetic.listenClickTap&&(this._fire(A,{evt:a}),c&&this._fire(B,{evt:a})),Kinetic.listenClickTap=!1},_touchmove:function(a){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition());c&&c.isListening()&&(c._fireAndBubble(r,{evt:a}),c.isListening()&&a.preventDefault&&a.preventDefault()),this._fire(C,{evt:a}),b&&b._drag(a)},_setPointerPosition:function(a){var b,c=this._getContentPosition(),d=a.offsetX,e=a.clientX,f=null,g=null;a=a?a:window.event,void 0!==a.touches?a.touches.length>0&&(b=a.touches[0],f=b.clientX-c.left,g=b.clientY-c.top):void 0!==d?(f=d,g=a.offsetY):"mozilla"===Kinetic.UA.browser?(f=a.layerX,g=a.layerY):void 0!==e&&c&&(f=e-c.left,g=a.clientY-c.top),null!==f&&null!==g&&(this.pointerPos={x:f,y:g})},_getContentPosition:function(){var a=this.content.getBoundingClientRect?this.content.getBoundingClientRect():{top:0,left:0};return{top:a.top,left:a.left}},_buildDOM:function(){var a=this.getContainer();if(!a){if(Kinetic.Util.isBrowser())throw"Stage has not container. But container is required";a=Kinetic.document.createElement(D)}a.innerHTML=K,this.content=Kinetic.document.createElement(D),this.content.style.position=E,this.content.style.display=F,this.content.className=G,this.content.setAttribute("role","presentation"),a.appendChild(this.content),this.bufferCanvas=new Kinetic.SceneCanvas({pixelRatio:1}),this.bufferHitCanvas=new Kinetic.HitCanvas,this._resizeDOM()},_onContent:function(a,b){var c,d,e=a.split(H),f=e.length;for(c=0;f>c;c++)d=e[c],this.content.addEventListener(d,b,!1)},cache:function(){Kinetic.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")},clearCache:function(){}}),Kinetic.Util.extend(Kinetic.Stage,Kinetic.Container),Kinetic.Factory.addGetter(Kinetic.Stage,"container"),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage,"container")}(),function(){Kinetic.Util.addMethods(Kinetic.BaseLayer,{___init:function(a){this.nodeType="Layer",Kinetic.Container.call(this,a)},createPNGStream:function(){return this.canvas._canvas.createPNGStream()},getCanvas:function(){return this.canvas},getHitCanvas:function(){return this.hitCanvas},getContext:function(){return this.getCanvas().getContext()},clear:function(a){return this.getContext().clear(a),this.getHitCanvas().getContext().clear(a),this},setZIndex:function(a){Kinetic.Node.prototype.setZIndex.call(this,a);var b=this.getStage();return b&&(b.content.removeChild(this.getCanvas()._canvas),a<b.getChildren().length-1?b.content.insertBefore(this.getCanvas()._canvas,b.getChildren()[a+1].getCanvas()._canvas):b.content.appendChild(this.getCanvas()._canvas)),this},moveToTop:function(){Kinetic.Node.prototype.moveToTop.call(this);var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),a.content.appendChild(this.getCanvas()._canvas))},moveUp:function(){if(Kinetic.Node.prototype.moveUp.call(this)){var a=this.getStage();a&&(a.content.removeChild(this.getCanvas()._canvas),this.index<a.getChildren().length-1?a.content.insertBefore(this.getCanvas()._canvas,a.getChildren()[this.index+1].getCanvas()._canvas):a.content.appendChild(this.getCanvas()._canvas))}},moveDown:function(){if(Kinetic.Node.prototype.moveDown.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[this.index+1].getCanvas()._canvas)}}},moveToBottom:function(){if(Kinetic.Node.prototype.moveToBottom.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas()._canvas),a.content.insertBefore(this.getCanvas()._canvas,b[1].getCanvas()._canvas)}}},getLayer:function(){return this},remove:function(){var a=this.getCanvas()._canvas;return Kinetic.Node.prototype.remove.call(this),a&&a.parentNode&&Kinetic.Util._isInDocument(a)&&a.parentNode.removeChild(a),this},getStage:function(){return this.parent}}),Kinetic.Util.extend(Kinetic.BaseLayer,Kinetic.Container),Kinetic.Factory.addGetterSetter(Kinetic.BaseLayer,"clearBeforeDraw",!0),Kinetic.Collection.mapMethods(Kinetic.BaseLayer)}(),function(){var a="#",b="beforeDraw",c="draw",d=[{x:0,y:0},{x:-1,y:0},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1}],e=d.length;Kinetic.Util.addMethods(Kinetic.Layer,{____init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,this.hitCanvas=new Kinetic.HitCanvas,Kinetic.BaseLayer.call(this,a)},_setCanvasSize:function(a,b){this.canvas.setSize(a,b),this.hitCanvas.setSize(a,b)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to a layer.")},getIntersection:function(a){var b,c,f,g;if(!this.hitGraphEnabled()||!this.isVisible())return null;for(c=0;e>c;c++){if(f=d[c],b=this._getIntersection({x:a.x+f.x,y:a.y+f.y}),g=b.shape)return g;if(!b.antialiased)return null}},_getIntersection:function(b){var c,d,e=this.hitCanvas.context._context.getImageData(b.x,b.y,1,1).data,f=e[3];return 255===f?(c=Kinetic.Util._rgbToHex(e[0],e[1],e[2]),d=Kinetic.shapes[a+c],{shape:d}):f>0?{antialiased:!0}:{}},drawScene:function(a,d){var e=this.getLayer(),f=a||e&&e.getCanvas();return this._fire(b,{node:this}),this.getClearBeforeDraw()&&f.getContext().clear(),Kinetic.Container.prototype.drawScene.call(this,f,d),this._fire(c,{node:this}),this},_applyTransform:function(a,b,c){var d=a.getAbsoluteTransform(c).getMatrix();b.transform(d[0],d[1],d[2],d[3],d[4],d[5])},drawHit:function(a,b){var c=this.getLayer(),d=a||c&&c.hitCanvas;return c&&c.getClearBeforeDraw()&&c.getHitCanvas().getContext().clear(),Kinetic.Container.prototype.drawHit.call(this,d,b),this},clear:function(a){return this.getContext().clear(a),this.getHitCanvas().getContext().clear(a),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),a?(this.getCanvas()._canvas.style.display="block",this.hitCanvas._canvas.style.display="block"):(this.getCanvas()._canvas.style.display="none",this.hitCanvas._canvas.style.display="none"),this},enableHitGraph:function(){return this.setHitGraphEnabled(!0),this},disableHitGraph:function(){return this.setHitGraphEnabled(!1),this}}),Kinetic.Util.extend(Kinetic.Layer,Kinetic.BaseLayer),Kinetic.Factory.addGetterSetter(Kinetic.Layer,"hitGraphEnabled",!0),Kinetic.Collection.mapMethods(Kinetic.Layer)}(),function(){Kinetic.Util.addMethods(Kinetic.FastLayer,{____init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,Kinetic.BaseLayer.call(this,a)},_validateAdd:function(a){var b=a.getType();"Shape"!==b&&Kinetic.Util.error("You may only add shapes to a fast layer.")},_setCanvasSize:function(a,b){this.canvas.setSize(a,b)},hitGraphEnabled:function(){return!1},getIntersection:function(){return null},drawScene:function(a){var b=this.getLayer(),c=a||b&&b.getCanvas();return this.getClearBeforeDraw()&&c.getContext().clear(),Kinetic.Container.prototype.drawScene.call(this,c),this},_applyTransform:function(a,b,c){if(!c||c._id!==this._id){var d=a.getTransform().getMatrix();b.transform(d[0],d[1],d[2],d[3],d[4],d[5])}},draw:function(){return this.drawScene(),this},clear:function(a){return this.getContext().clear(a),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),this.getCanvas()._canvas.style.display=a?"block":"none",this}}),Kinetic.Util.extend(Kinetic.FastLayer,Kinetic.BaseLayer),Kinetic.Collection.mapMethods(Kinetic.FastLayer)}(),function(){Kinetic.Util.addMethods(Kinetic.Group,{___init:function(a){this.nodeType="Group",Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to groups.")}}),Kinetic.Util.extend(Kinetic.Group,Kinetic.Container),Kinetic.Collection.mapMethods(Kinetic.Group)}(),function(){Kinetic.Rect=function(a){this.___init(a)},Kinetic.Rect.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Rect",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.getCornerRadius(),c=this.getWidth(),d=this.getHeight();a.beginPath(),b?(a.moveTo(b,0),a.lineTo(c-b,0),a.arc(c-b,b,b,3*Math.PI/2,0,!1),a.lineTo(c,d-b),a.arc(c-b,d-b,b,0,Math.PI/2,!1),a.lineTo(b,d),a.arc(b,d-b,b,Math.PI/2,Math.PI,!1),a.lineTo(0,b),a.arc(b,b,b,Math.PI,3*Math.PI/2,!1)):a.rect(0,0,c,d),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Rect,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Rect,"cornerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Rect)}(),function(){var a=2*Math.PI-1e-4,b="Circle";Kinetic.Circle=function(a){this.___init(a)},Kinetic.Circle.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b,this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){b.beginPath(),b.arc(0,0,this.getRadius(),0,a,!1),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius(a/2)}},Kinetic.Util.extend(Kinetic.Circle,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Circle,"radius",0),Kinetic.Collection.mapMethods(Kinetic.Circle)}(),function(){var a=2*Math.PI-1e-4,b="Ellipse";Kinetic.Ellipse=function(a){this.___init(a)},Kinetic.Ellipse.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b,this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){var c=this.getRadius(),d=c.x,e=c.y;b.beginPath(),b.save(),d!==e&&b.scale(1,e/d),b.arc(0,0,d,0,a,!1),b.restore(),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius().x},getHeight:function(){return 2*this.getRadius().y},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius({x:a/2})},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius({y:a/2})}},Kinetic.Util.extend(Kinetic.Ellipse,Kinetic.Shape),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse,"radius",["x","y"]),Kinetic.Factory.addGetterSetter(Kinetic.Ellipse,"radiusX",0),Kinetic.Factory.addGetterSetter(Kinetic.Ellipse,"radiusY",0),Kinetic.Collection.mapMethods(Kinetic.Ellipse)}(),function(){var a=2*Math.PI-1e-4;Kinetic.Ring=function(a){this.___init(a)},Kinetic.Ring.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Ring",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(b){b.beginPath(),b.arc(0,0,this.getInnerRadius(),0,a,!1),b.moveTo(this.getOuterRadius(),0),b.arc(0,0,this.getOuterRadius(),a,0,!0),b.closePath(),b.fillStrokeShape(this)},getWidth:function(){return 2*this.getOuterRadius()},getHeight:function(){return 2*this.getOuterRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setOuterRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setOuterRadius(a/2)}},Kinetic.Util.extend(Kinetic.Ring,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Ring,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Ring,"outerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Ring)}(),function(){Kinetic.Wedge=function(a){this.___init(a)},Kinetic.Wedge.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Wedge",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){a.beginPath(),a.arc(0,0,this.getRadius(),0,Kinetic.getAngle(this.getAngle()),this.getClockwise()),a.lineTo(0,0),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Wedge,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"radius",0),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"angle",0),Kinetic.Factory.addGetterSetter(Kinetic.Wedge,"clockwise",!1),Kinetic.Factory.backCompat(Kinetic.Wedge,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"}),Kinetic.Collection.mapMethods(Kinetic.Wedge)}(),function(){Math.PI/180;Kinetic.Arc=function(a){this.___init(a)},Kinetic.Arc.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Arc",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=Kinetic.getAngle(this.angle()),c=this.clockwise();a.beginPath(),a.arc(0,0,this.getOuterRadius(),0,b,c),a.arc(0,0,this.getInnerRadius(),b,0,!c),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Arc,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"outerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"angle",0),Kinetic.Factory.addGetterSetter(Kinetic.Arc,"clockwise",!1),Kinetic.Collection.mapMethods(Kinetic.Arc)}(),function(){var a="Image";Kinetic.Image=function(a){this.___init(a)},Kinetic.Image.prototype={___init:function(b){Kinetic.Shape.call(this,b),this.className=a,this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},_sceneFunc:function(a){var b,c,d,e,f=this.getWidth(),g=this.getHeight(),h=this.getImage();h&&(b=this.getCrop(),c=b.width,d=b.height,e=c&&d?[h,b.x,b.y,c,d,0,0,f,g]:[h,0,0,f,g]),a.beginPath(),a.rect(0,0,f,g),a.closePath(),a.fillStrokeShape(this),h&&a.drawImage.apply(a,e)},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},getWidth:function(){var a=this.getImage();return this.attrs.width||(a?a.width:0)},getHeight:function(){var a=this.getImage();return this.attrs.height||(a?a.height:0)}},Kinetic.Util.extend(Kinetic.Image,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Image,"image"),Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image,"crop",["x","y","width","height"]),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropX",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropY",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropWidth",0),Kinetic.Factory.addGetterSetter(Kinetic.Image,"cropHeight",0),Kinetic.Collection.mapMethods(Kinetic.Image)}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="auto",d="center",e="Change.kinetic",f="2d",g="-",h="",i="left",j="text",k="Text",l="middle",m="normal",n="px ",o=" ",p="right",q="word",r="char",s="none",t=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","lineHeight","text","width","height","wrap"],u=t.length,v=Kinetic.Util.createCanvasElement().getContext(f);Kinetic.Text=function(a){this.___init(a)},Kinetic.Text.prototype={___init:function(d){var f=this;void 0===d.width&&(d.width=c),void 0===d.height&&(d.height=c),Kinetic.Shape.call(this,d),this._fillFunc=a,this._strokeFunc=b,this.className=k;for(var g=0;u>g;g++)this.on(t[g]+e,f._setTextData);this._setTextData(),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(a){var b,c=this.getPadding(),e=this.getTextHeight(),f=this.getLineHeight()*e,g=this.textArr,h=g.length,j=this.getWidth();for(a.setAttr("font",this._getContextFont()),a.setAttr("textBaseline",l),a.setAttr("textAlign",i),a.save(),a.translate(c,0),a.translate(0,c+e/2),b=0;h>b;b++){var k=g[b],m=k.text,n=k.width;a.save(),this.getAlign()===p?a.translate(j-n-2*c,0):this.getAlign()===d&&a.translate((j-n-2*c)/2,0),this.partialText=m,a.fillStrokeShape(this),a.restore(),a.translate(0,f)}a.restore()},_hitFunc:function(a){var b=this.getWidth(),c=this.getHeight();a.beginPath(),a.rect(0,0,b,c),a.closePath(),a.fillStrokeShape(this)},setText:function(a){var b=Kinetic.Util._isString(a)?a:a.toString();return this._setAttr(j,b),this},getWidth:function(){return this.attrs.width===c?this.getTextWidth()+2*this.getPadding():this.attrs.width},getHeight:function(){return this.attrs.height===c?this.getTextHeight()*this.textArr.length*this.getLineHeight()+2*this.getPadding():this.attrs.height},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},_getTextSize:function(a){var b,c=v,d=this.getFontSize();return c.save(),c.font=this._getContextFont(),b=c.measureText(a),c.restore(),{width:b.width,height:parseInt(d,10)}},_getContextFont:function(){return this.getFontStyle()+o+this.getFontVariant()+o+this.getFontSize()+n+this.getFontFamily()},_addTextLine:function(a,b){return this.textArr.push({text:a,width:b})},_getTextWidth:function(a){return v.measureText(a).width},_setTextData:function(){var a=this.getText().split("\n"),b=+this.getFontSize(),d=0,e=this.getLineHeight()*b,f=this.attrs.width,h=this.attrs.height,i=f!==c,j=h!==c,k=this.getPadding(),l=f-2*k,m=h-2*k,n=0,p=this.getWrap(),q=p!==s,t=p!==r&&q;this.textArr=[],v.save(),v.font=this._getContextFont();
for(var u=0,w=a.length;w>u;++u){var x=a[u],y=this._getTextWidth(x);if(i&&y>l)for(;x.length>0;){for(var z=0,A=x.length,B="",C=0;A>z;){var D=z+A>>>1,E=x.slice(0,D+1),F=this._getTextWidth(E);l>=F?(z=D+1,B=E,C=F):A=D}if(!B)break;if(t){var G=Math.max(B.lastIndexOf(o),B.lastIndexOf(g))+1;G>0&&(z=G,B=B.slice(0,z),C=this._getTextWidth(B))}if(this._addTextLine(B,C),d=Math.max(d,C),n+=e,!q||j&&n+e>m)break;if(x=x.slice(z),x.length>0&&(y=this._getTextWidth(x),l>=y)){this._addTextLine(x,y),n+=e,d=Math.max(d,y);break}}else this._addTextLine(x,y),n+=e,d=Math.max(d,y);if(j&&n+e>m)break}v.restore(),this.textHeight=b,this.textWidth=d}},Kinetic.Util.extend(Kinetic.Text,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontFamily","Arial"),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontSize",12),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontStyle",m),Kinetic.Factory.addGetterSetter(Kinetic.Text,"fontVariant",m),Kinetic.Factory.addGetterSetter(Kinetic.Text,"padding",0),Kinetic.Factory.addGetterSetter(Kinetic.Text,"align",i),Kinetic.Factory.addGetterSetter(Kinetic.Text,"lineHeight",1),Kinetic.Factory.addGetterSetter(Kinetic.Text,"wrap",q),Kinetic.Factory.addGetter(Kinetic.Text,"text",h),Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text,"text"),Kinetic.Collection.mapMethods(Kinetic.Text)}(),function(){Kinetic.Line=function(a){this.___init(a)},Kinetic.Line.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Line",this.on("pointsChange.kinetic tensionChange.kinetic closedChange.kinetic",function(){this._clearCache("tensionPoints")}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b,c,d,e=this.getPoints(),f=e.length,g=this.getTension(),h=this.getClosed();if(a.beginPath(),a.moveTo(e[0],e[1]),0!==g&&f>4){for(b=this.getTensionPoints(),c=b.length,d=h?0:4,h||a.quadraticCurveTo(b[0],b[1],b[2],b[3]);c-2>d;)a.bezierCurveTo(b[d++],b[d++],b[d++],b[d++],b[d++],b[d++]);h||a.quadraticCurveTo(b[c-2],b[c-1],e[f-2],e[f-1])}else for(d=2;f>d;d+=2)a.lineTo(e[d],e[d+1]);h?(a.closePath(),a.fillStrokeShape(this)):a.strokeShape(this)},getTensionPoints:function(){return this._getCache("tensionPoints",this._getTensionPoints)},_getTensionPoints:function(){return this.getClosed()?this._getTensionPointsClosed():Kinetic.Util._expandPoints(this.getPoints(),this.getTension())},_getTensionPointsClosed:function(){var a=this.getPoints(),b=a.length,c=this.getTension(),d=Kinetic.Util,e=d._getControlPoints(a[b-2],a[b-1],a[0],a[1],a[2],a[3],c),f=d._getControlPoints(a[b-4],a[b-3],a[b-2],a[b-1],a[0],a[1],c),g=Kinetic.Util._expandPoints(a,c),h=[e[2],e[3]].concat(g).concat([f[0],f[1],a[b-2],a[b-1],f[2],f[3],e[0],e[1],a[0],a[1]]);return h}},Kinetic.Util.extend(Kinetic.Line,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Line,"closed",!1),Kinetic.Factory.addGetterSetter(Kinetic.Line,"tension",0),Kinetic.Factory.addGetterSetter(Kinetic.Line,"points"),Kinetic.Collection.mapMethods(Kinetic.Line)}(),function(){Kinetic.Sprite=function(a){this.___init(a)},Kinetic.Sprite.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Sprite",this.anim=new Kinetic.Animation,this.on("animationChange.kinetic",function(){this.frameIndex(0)}),this.on("frameRateChange.kinetic",function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval())}),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(a){var b=this.getAnimation(),c=this.frameIndex(),d=4*c,e=this.getAnimations()[b],f=e[d+0],g=e[d+1],h=e[d+2],i=e[d+3],j=this.getImage();j&&a.drawImage(j,f,g,h,i,0,0,h,i)},_hitFunc:function(a){var b=this.getAnimation(),c=this.frameIndex(),d=4*c,e=this.getAnimations()[b],f=e[d+2],g=e[d+3];a.beginPath(),a.rect(0,0,f,g),a.closePath(),a.fillShape(this)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},_setInterval:function(){var a=this;this.interval=setInterval(function(){a._updateIndex()},1e3/this.getFrameRate())},start:function(){var a=this.getLayer();this.anim.setLayers(a),this._setInterval(),this.anim.start()},stop:function(){this.anim.stop(),clearInterval(this.interval)},isRunning:function(){return this.anim.isRunning()},_updateIndex:function(){var a=this.frameIndex(),b=this.getAnimation(),c=this.getAnimations(),d=c[b],e=d.length/4;this.frameIndex(e-1>a?a+1:0)}},Kinetic.Util.extend(Kinetic.Sprite,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"animation"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"animations"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"image"),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"frameIndex",0),Kinetic.Factory.addGetterSetter(Kinetic.Sprite,"frameRate",17),Kinetic.Factory.backCompat(Kinetic.Sprite,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"}),Kinetic.Collection.mapMethods(Kinetic.Sprite)}(),function(){Kinetic.Path=function(a){this.___init(a)},Kinetic.Path.prototype={___init:function(a){this.dataArray=[];var b=this;Kinetic.Shape.call(this,a),this.className="Path",this.dataArray=Kinetic.Path.parsePathData(this.getData()),this.on("dataChange.kinetic",function(){b.dataArray=Kinetic.Path.parsePathData(this.getData())}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.dataArray,c=!1;a.beginPath();for(var d=0;d<b.length;d++){var e=b[d].command,f=b[d].points;switch(e){case"L":a.lineTo(f[0],f[1]);break;case"M":a.moveTo(f[0],f[1]);break;case"C":a.bezierCurveTo(f[0],f[1],f[2],f[3],f[4],f[5]);break;case"Q":a.quadraticCurveTo(f[0],f[1],f[2],f[3]);break;case"A":var g=f[0],h=f[1],i=f[2],j=f[3],k=f[4],l=f[5],m=f[6],n=f[7],o=i>j?i:j,p=i>j?1:i/j,q=i>j?j/i:1;a.translate(g,h),a.rotate(m),a.scale(p,q),a.arc(0,0,o,k,k+l,1-n),a.scale(1/p,1/q),a.rotate(-m),a.translate(-g,-h);break;case"z":a.closePath(),c=!0}}c?a.fillStrokeShape(this):a.strokeShape(this)}},Kinetic.Util.extend(Kinetic.Path,Kinetic.Shape),Kinetic.Path.getLineLength=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},Kinetic.Path.getPointOnLine=function(a,b,c,d,e,f,g){void 0===f&&(f=b),void 0===g&&(g=c);var h=(e-c)/(d-b+1e-8),i=Math.sqrt(a*a/(1+h*h));b>d&&(i*=-1);var j,k=h*i;if(d===b)j={x:f,y:g+k};else if((g-c)/(f-b+1e-8)===h)j={x:f+i,y:g+k};else{var l,m,n=this.getLineLength(b,c,d,e);if(1e-8>n)return void 0;var o=(f-b)*(d-b)+(g-c)*(e-c);o/=n*n,l=b+o*(d-b),m=c+o*(e-c);var p=this.getLineLength(f,g,l,m),q=Math.sqrt(a*a-p*p);i=Math.sqrt(q*q/(1+h*h)),b>d&&(i*=-1),k=h*i,j={x:l+i,y:m+k}}return j},Kinetic.Path.getPointOnCubicBezier=function(a,b,c,d,e,f,g,h,i){function j(a){return a*a*a}function k(a){return 3*a*a*(1-a)}function l(a){return 3*a*(1-a)*(1-a)}function m(a){return(1-a)*(1-a)*(1-a)}var n=h*j(a)+f*k(a)+d*l(a)+b*m(a),o=i*j(a)+g*k(a)+e*l(a)+c*m(a);return{x:n,y:o}},Kinetic.Path.getPointOnQuadraticBezier=function(a,b,c,d,e,f,g){function h(a){return a*a}function i(a){return 2*a*(1-a)}function j(a){return(1-a)*(1-a)}var k=f*h(a)+d*i(a)+b*j(a),l=g*h(a)+e*i(a)+c*j(a);return{x:k,y:l}},Kinetic.Path.getPointOnEllipticalArc=function(a,b,c,d,e,f){var g=Math.cos(f),h=Math.sin(f),i={x:c*Math.cos(e),y:d*Math.sin(e)};return{x:a+(i.x*g-i.y*h),y:b+(i.x*h+i.y*g)}},Kinetic.Path.parsePathData=function(a){if(!a)return[];var b=a,c=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];b=b.replace(new RegExp(" ","g"),",");for(var d=0;d<c.length;d++)b=b.replace(new RegExp(c[d],"g"),"|"+c[d]);var e=b.split("|"),f=[],g=0,h=0;for(d=1;d<e.length;d++){var i=e[d],j=i.charAt(0);i=i.slice(1),i=i.replace(new RegExp(",-","g"),"-"),i=i.replace(new RegExp("-","g"),",-"),i=i.replace(new RegExp("e,-","g"),"e-");var k=i.split(",");k.length>0&&""===k[0]&&k.shift();for(var l=0;l<k.length;l++)k[l]=parseFloat(k[l]);for(;k.length>0&&!isNaN(k[0]);){var m,n,o,p,q,r,s,t,u,v,w=null,x=[],y=g,z=h;switch(j){case"l":g+=k.shift(),h+=k.shift(),w="L",x.push(g,h);break;case"L":g=k.shift(),h=k.shift(),x.push(g,h);break;case"m":var A=k.shift(),B=k.shift();if(g+=A,h+=B,w="M",f.length>2&&"z"===f[f.length-1].command)for(var C=f.length-2;C>=0;C--)if("M"===f[C].command){g=f[C].points[0]+A,h=f[C].points[1]+B;break}x.push(g,h),j="l";break;case"M":g=k.shift(),h=k.shift(),w="M",x.push(g,h),j="L";break;case"h":g+=k.shift(),w="L",x.push(g,h);break;case"H":g=k.shift(),w="L",x.push(g,h);break;case"v":h+=k.shift(),w="L",x.push(g,h);break;case"V":h=k.shift(),w="L",x.push(g,h);break;case"C":x.push(k.shift(),k.shift(),k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"c":x.push(g+k.shift(),h+k.shift(),g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"S":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,k.shift(),k.shift()),g=k.shift(),h=k.shift(),w="C",x.push(g,h);break;case"s":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"Q":x.push(k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"q":x.push(g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="Q",x.push(g,h);break;case"T":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g=k.shift(),h=k.shift(),w="Q",x.push(n,o,g,h);break;case"t":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g+=k.shift(),h+=k.shift(),w="Q",x.push(n,o,g,h);break;case"A":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g=k.shift(),h=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r);break;case"a":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g+=k.shift(),h+=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r)}f.push({command:w||j,points:x,start:{x:y,y:z},pathLength:this.calcLength(y,z,w||j,x)})}("z"===j||"Z"===j)&&f.push({command:"z",points:[],start:void 0,pathLength:0})}return f},Kinetic.Path.calcLength=function(a,b,c,d){var e,f,g,h,i=Kinetic.Path;switch(c){case"L":return i.getLineLength(a,b,d[0],d[1]);case"C":for(e=0,f=i.getPointOnCubicBezier(0,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),h=.01;1>=h;h+=.01)g=i.getPointOnCubicBezier(h,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),e+=i.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"Q":for(e=0,f=i.getPointOnQuadraticBezier(0,a,b,d[0],d[1],d[2],d[3]),h=.01;1>=h;h+=.01)g=i.getPointOnQuadraticBezier(h,a,b,d[0],d[1],d[2],d[3]),e+=i.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"A":e=0;var j=d[4],k=d[5],l=d[4]+k,m=Math.PI/180;if(Math.abs(j-l)<m&&(m=Math.abs(j-l)),f=i.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],j,0),0>k)for(h=j-m;h>l;h-=m)g=i.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],h,0),e+=i.getLineLength(f.x,f.y,g.x,g.y),f=g;else for(h=j+m;l>h;h+=m)g=i.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],h,0),e+=i.getLineLength(f.x,f.y,g.x,g.y),f=g;return g=i.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],l,0),e+=i.getLineLength(f.x,f.y,g.x,g.y)}return 0},Kinetic.Path.convertEndpointToCenterParameterization=function(a,b,c,d,e,f,g,h,i){var j=i*(Math.PI/180),k=Math.cos(j)*(a-c)/2+Math.sin(j)*(b-d)/2,l=-1*Math.sin(j)*(a-c)/2+Math.cos(j)*(b-d)/2,m=k*k/(g*g)+l*l/(h*h);m>1&&(g*=Math.sqrt(m),h*=Math.sqrt(m));var n=Math.sqrt((g*g*h*h-g*g*l*l-h*h*k*k)/(g*g*l*l+h*h*k*k));e===f&&(n*=-1),isNaN(n)&&(n=0);var o=n*g*l/h,p=n*-h*k/g,q=(a+c)/2+Math.cos(j)*o-Math.sin(j)*p,r=(b+d)/2+Math.sin(j)*o+Math.cos(j)*p,s=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])},t=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(s(a)*s(b))},u=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(t(a,b))},v=u([1,0],[(k-o)/g,(l-p)/h]),w=[(k-o)/g,(l-p)/h],x=[(-1*k-o)/g,(-1*l-p)/h],y=u(w,x);return t(w,x)<=-1&&(y=Math.PI),t(w,x)>=1&&(y=0),0===f&&y>0&&(y-=2*Math.PI),1===f&&0>y&&(y+=2*Math.PI),[q,r,g,h,v,y,j,f]},Kinetic.Factory.addGetterSetter(Kinetic.Path,"data"),Kinetic.Collection.mapMethods(Kinetic.Path)}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="",d="normal";Kinetic.TextPath=function(a){this.___init(a)},Kinetic.TextPath.prototype={___init:function(c){var d=this;this.dummyCanvas=Kinetic.Util.createCanvasElement(),this.dataArray=[],Kinetic.Shape.call(this,c),this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=a,this._strokeFuncHit=b,this.className="TextPath",this.dataArray=Kinetic.Path.parsePathData(this.attrs.data),this.on("dataChange.kinetic",function(){d.dataArray=Kinetic.Path.parsePathData(this.attrs.data)}),this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic",d._setTextData),d._setTextData(),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){a.setAttr("font",this._getContextFont()),a.setAttr("textBaseline","middle"),a.setAttr("textAlign","left"),a.save();for(var b=this.glyphInfo,c=0;c<b.length;c++){a.save();var d=b[c].p0;a.translate(d.x,d.y),a.rotate(b[c].rotation),this.partialText=b[c].text,a.fillStrokeShape(this),a.restore()}a.restore()},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},setText:function(a){Kinetic.Text.prototype.setText.call(this,a)},_getTextSize:function(a){var b=this.dummyCanvas,c=b.getContext("2d");c.save(),c.font=this._getContextFont();var d=c.measureText(a);return c.restore(),{width:d.width,height:parseInt(this.attrs.fontSize,10)}},_setTextData:function(){var a=this,b=this._getTextSize(this.attrs.text);this.textWidth=b.width,this.textHeight=b.height,this.glyphInfo=[];for(var c,d,e,f=this.attrs.text.split(""),g=-1,h=0,i=function(){h=0;for(var b=a.dataArray,d=g+1;d<b.length;d++){if(b[d].pathLength>0)return g=d,b[d];"M"==b[d].command&&(c={x:b[d].points[0],y:b[d].points[1]})}return{}},j=function(b){var f=a._getTextSize(b).width,g=0,j=0;for(d=void 0;Math.abs(f-g)/f>.01&&25>j;){j++;for(var k=g;void 0===e;)e=i(),e&&k+e.pathLength<f&&(k+=e.pathLength,e=void 0);if(e==={}||void 0===c)return void 0;var l=!1;switch(e.command){case"L":Kinetic.Path.getLineLength(c.x,c.y,e.points[0],e.points[1])>f?d=Kinetic.Path.getPointOnLine(f,c.x,c.y,e.points[0],e.points[1],c.x,c.y):e=void 0;break;case"A":var m=e.points[4],n=e.points[5],o=e.points[4]+n;0===h?h=m+1e-8:f>g?h+=Math.PI/180*n/Math.abs(n):h-=Math.PI/360*n/Math.abs(n),(0>n&&o>h||n>=0&&h>o)&&(h=o,l=!0),d=Kinetic.Path.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],h,e.points[6]);break;case"C":0===h?h=f>e.pathLength?1e-8:f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnCubicBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5]);break;case"Q":0===h?h=f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnQuadraticBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3])}void 0!==d&&(g=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y)),l&&(l=!1,e=void 0)}},k=0;k<f.length&&(j(f[k]),void 0!==c&&void 0!==d);k++){var l=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y),m=0,n=Kinetic.Path.getPointOnLine(m+l/2,c.x,c.y,d.x,d.y),o=Math.atan2(d.y-c.y,d.x-c.x);this.glyphInfo.push({transposeX:n.x,transposeY:n.y,text:f[k],rotation:o,p0:c,p1:d}),c=d}}},Kinetic.TextPath.prototype._getContextFont=Kinetic.Text.prototype._getContextFont,Kinetic.Util.extend(Kinetic.TextPath,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontFamily","Arial"),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontSize",12),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontStyle",d),Kinetic.Factory.addGetterSetter(Kinetic.TextPath,"fontVariant",d),Kinetic.Factory.addGetter(Kinetic.TextPath,"text",c),Kinetic.Collection.mapMethods(Kinetic.TextPath)}(),function(){Kinetic.RegularPolygon=function(a){this.___init(a)},Kinetic.RegularPolygon.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="RegularPolygon",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b,c,d,e=this.attrs.sides,f=this.attrs.radius;for(a.beginPath(),a.moveTo(0,0-f),b=1;e>b;b++)c=f*Math.sin(2*b*Math.PI/e),d=-1*f*Math.cos(2*b*Math.PI/e),a.lineTo(c,d);a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.RegularPolygon,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon,"radius",0),Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon,"sides",0),Kinetic.Collection.mapMethods(Kinetic.RegularPolygon)}(),function(){Kinetic.Star=function(a){this.___init(a)},Kinetic.Star.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Star",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.innerRadius(),c=this.outerRadius(),d=this.numPoints();a.beginPath(),a.moveTo(0,0-c);for(var e=1;2*d>e;e++){var f=e%2===0?c:b,g=f*Math.sin(e*Math.PI/d),h=-1*f*Math.cos(e*Math.PI/d);a.lineTo(g,h)}a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Star,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Star,"numPoints",5),Kinetic.Factory.addGetterSetter(Kinetic.Star,"innerRadius",0),Kinetic.Factory.addGetterSetter(Kinetic.Star,"outerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Star)}(),function(){var a=["fontFamily","fontSize","fontStyle","padding","lineHeight","text"],b="Change.kinetic",c="none",d="up",e="right",f="down",g="left",h="Label",i=a.length;Kinetic.Label=function(a){this.____init(a)},Kinetic.Label.prototype={____init:function(a){var b=this;this.className=h,Kinetic.Group.call(this,a),this.on("add.kinetic",function(a){b._addListeners(a.child),b._sync()})},getText:function(){return this.find("Text")[0]},getTag:function(){return this.find("Tag")[0]},_addListeners:function(c){var d,e=this,f=function(){e._sync()};for(d=0;i>d;d++)c.on(a[d]+b,f)},getWidth:function(){return this.getText().getWidth()},getHeight:function(){return this.getText().getHeight()},_sync:function(){var a,b,c,h,i,j,k,l=this.getText(),m=this.getTag();if(l&&m){switch(a=l.getWidth(),b=l.getHeight(),c=m.getPointerDirection(),h=m.getPointerWidth(),k=m.getPointerHeight(),i=0,j=0,c){case d:i=a/2,j=-1*k;break;case e:i=a+h,j=b/2;break;case f:i=a/2,j=b+k;break;case g:i=-1*h,j=b/2}m.setAttrs({x:-1*i,y:-1*j,width:a,height:b}),l.setAttrs({x:-1*i,y:-1*j})}}},Kinetic.Util.extend(Kinetic.Label,Kinetic.Group),Kinetic.Collection.mapMethods(Kinetic.Label),Kinetic.Tag=function(a){this.___init(a)},Kinetic.Tag.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Tag",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(a){var b=this.getWidth(),c=this.getHeight(),h=this.getPointerDirection(),i=this.getPointerWidth(),j=this.getPointerHeight();a.beginPath(),a.moveTo(0,0),h===d&&(a.lineTo((b-i)/2,0),a.lineTo(b/2,-1*j),a.lineTo((b+i)/2,0)),a.lineTo(b,0),h===e&&(a.lineTo(b,(c-j)/2),a.lineTo(b+i,c/2),a.lineTo(b,(c+j)/2)),a.lineTo(b,c),h===f&&(a.lineTo((b+i)/2,c),a.lineTo(b/2,c+j),a.lineTo((b-i)/2,c)),a.lineTo(0,c),h===g&&(a.lineTo(0,(c+j)/2),a.lineTo(-1*i,c/2),a.lineTo(0,(c-j)/2)),a.closePath(),a.fillStrokeShape(this)}},Kinetic.Util.extend(Kinetic.Tag,Kinetic.Shape),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerDirection",c),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerWidth",0),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"pointerHeight",0),Kinetic.Factory.addGetterSetter(Kinetic.Tag,"cornerRadius",0),Kinetic.Collection.mapMethods(Kinetic.Tag)}();"use strict";

var localStor = {
	ped_save : 'ped_data',
	ped_type : 'ped_type',
	hap_save : 'hap_data',  // Own data format
	hap_type : 'hap_type',
	transfer : 'transferFromHaploToPed' // pedigrees in haplo can be modified
}


// Used by settings.js
function clearLocalHaploStorage(){
	console.group("clear local haplo:")
	for (var key in localStor)
	{
		localStorage.removeItem(localStor[key])
		console.log(key)
	}
	console.groupEnd("clear local haplo:")
}

function debugSaveHaplo(){
	localStorage.setItem("TEST", MainButtonActions._temphaploload);
}


class FileFormat {

	constructor(haplo,
		map = null ,
		ped = null ,
		descent = null,
		afterCallback = null)
	{

		this.descentfile = (descent === null)?0:document.getElementById(descent.id).files[0] ||  0;
		this.haplofile =     (haplo === null)?0:document.getElementById(haplo.id).files[0]   ||  0;
		this.mapfile =         (map === null)?0:document.getElementById(map.id).files[0]     ||  0;
		this.pedfile =         (ped === null)?0:document.getElementById(ped.id).files[0]     ||  0;

		if (haplo === null){
			throw new Error("No haplo file given")
		}

		var that = this,
			useresolver = AssignHGroups.resolvers.ASTAR,
			queue = new PromiseQueue(PromiseQueue.pFileRead);
		


		FileFormat.__begFuncs();


		console.groupCollapsed("File Processing")

		// Haplo *must* get called
		queue.addJob({
			type:     "haplo",
			file:     this.haplofile,
			fed_data: haplo.fed_data || false,
			task:     function(haplo_text)
			{
				MainButtonActions._temphaploload = haplo_text; // for transferring from haplo to pedcreate
				haplo.process(haplo_text);

				// Sometimes the haplo file has RS data and this step is not neccesary.
				if (!haplo.hasMarkerNames && that.mapfile === 0){
					// Enumerate map based on number of locus
					FileFormat.enumerateMarkers();
				}			
			}
		});

		// Map GOES FIRST!
		if (this.mapfile !== 0){
			queue.addJob({type:"map", file:this.mapfile, task:map.process});
		}


		// Descent graph 
		if (this.descentfile !== 0){
			useresolver = descent.resolver_mode;
			queue.addJob({type:"descent", file:this.descentfile, task: descent.process});
		}
		// The descent graph for simwalk is within the haplo data
		else if (haplo.useDescent !== undefined){
			if (haplo.useDescent){
				useresolver = haplo.resolver_mode;
			}
		}

		// Ped data
		if (this.pedfile !== 0){
			queue.addJob({type:"pedfile", file:that.pedfile, task:ped.process});
		}		


		// Process all jobs, then run finish func
		queue.exec(function(res_array){

			console.groupEnd()

			if (afterCallback !== null){
				afterCallback();
			} else {
				// Assume Haplo mode is final callback
				HaploPedProps.init(function(){
					if (haplo.inferGenders && that.pedfile === 0){
						familyMapOps.inferGenders();
					}
				});
			}
			// No descent file performs Hgroup assignment
			FileFormat.__endFuncs(useresolver);
		});
	}



	static __begFuncs(){
		// Flush all maps
		MainButtonActions.preamble();
		MainPageHandler.haplomodeload();
	}


	// If useresolver === null, we ignore assignHGroups
	//   altogether (useful when loading a prior analysis)
	static __endFuncs(descentmode = 0){
		
		graphInitPos(nodeSize + 10, grid_rezY);

		console.groupCollapsed("Haploblock Assignment")
		if (descentmode === null){
			console.log("Resolve: Load From Storage");
		} else {
			AssignHGroups.init(descentmode);
			BenchStopwatch.stop();
		}
		console.groupEnd();

		MarkerData.padMarkerMap();
	}


	static enumerateMarkers(){
		// No map -- enumerate markers off some random perc
		var randomperc = familyMapOps.getRandomPerc(),
			allele_length = randomperc.haplo_data[0].data_array.length;

		var markers = [];

		for (var m=0; m < allele_length; m++){
			markers.push(String("          " + m).slice(-10));
		}

		MarkerData.addMarkers( markers );
	}

	// Shared utils
	static updateFamily(text_unformatted){
//		console.log("::Pedin --- start");
		
		var lines = text_unformatted.split('\n');

		for (var l=0; l < lines.length; l++)
		{
			var line = lines[l].trim();

			if (line.length === 0){
				continue;
			}

			var tokens = line.split(/\s+/);

			var fam = Number(tokens[0]);

			var pers = new Person(
				Number(tokens[1]), // id
				Number(tokens[4]), // gender
				Number(tokens[5]), // affect
				Number(tokens[3]), // mother
				Number(tokens[2])  // father
			);

			// This should ONLY update existing
			//console.log( pers.id, fam );
			var perc = familyMapOps.getPerc( pers.id, fam );
			familyMapOps.updateIntoPerc( perc.id, pers, fam );
		}
//		console.log("::Pedin --- finish");
	}
}
var fileSelector = {

  __initialised: false,

  _container: document.getElementById('filebox'),
  _div: document.getElementById('fileselector'),
  _close: document.getElementById("filebox_close"),

  _boxpref: "box_",
  _subpref: "submit_",
  _haplosuff: "_haplo",
  _mapsuff: "_map",

  formats: { // must match option values
    "allegro": "allegro",
    "genehunter": "ghm",
    "simwalk": "sw",
    "merlin": "merlin",
    "null":"null"
  },
  // Song 9 week 7
  _getBox(progname) {
    return document.getElementById(fileSelector._boxpref + progname);
  },

  _getHaplo(progname) {
    return document.getElementById(progname + fileSelector._haplosuff);
  },

  _getMap(progname) {
    return document.getElementById(progname + fileSelector._mapsuff);
  },

  _getSubmit(progname){
    return document.getElementById(fileSelector._subpref + progname);
  },

  _initSubmits(){
    for (var format in fileSelector.formats){
      var val = fileSelector.formats[format],
          submit = fileSelector._getSubmit(val);


      if (format in init.haploview){
        submit.onclick = init.haploview[format];       
      }
    }
  },


  selectProg(progname) {
    for (var format in fileSelector.formats) {
      var value = fileSelector.formats[format];
      if (format === progname) {
        fileSelector._getBox(value).style.display = "";
      } else {
        fileSelector._getBox(value).style.display = "none";
      }
    }
  },

  init() {
    fileSelector._container.style.display = "block"

    utility.showBG(); // must occur AFTER

    fileSelector._div.focus();


    if (!fileSelector.__initialised)
    {
      function change() {
        fileSelector.selectProg(this.value);
      };

      fileSelector._div.onchange = change;
      fileSelector._div.onkeyup = change;

      fileSelector._close.onclick = fileSelector.end;

      fileSelector._initSubmits();
      

      fileSelector.__initialised = true;
    }

    fileSelector.selectProg(fileSelector._div.value);
  },

  end(){
    utility.hideBG();
    fileSelector._container.style.display = "none";
  }
}



class PromiseQueue {

	constructor(jobfunc){
		this.promise = Promise.resolve();
		this.generaltask = jobfunc;
	}

	
	addJob(job){
		console.log("---Queuing:", job.file.name)
		
		var that = this;

		this.promise = this.promise.then(function(){
			console.log("---Dispatching:", job.file.name);
			return that.generaltask(job);
		});
	}


	// general task, as set externally to constructor
	static pFileRead(fileprops){
		var file = fileprops.file,
			task = fileprops.task,
			type = fileprops.type,
			fed_data = fileprops.fed_data || false;

		return new Promise((resolve, reject) => {

			if (fed_data){
				//console.log("")
				try {
					task(fed_data)
					resolve();
				} catch (e) {
					console.log("error", e);
					reject("Generated data failed to process")
				}
			}

			else {
				var fr = new FileReader();
				
				fr.onload = function(e){
					try {
			    		task(e.target.result);
		    			resolve();

		    		} catch(e){
		    			reject(file.name + " is not a " + type);
		    		}
		    	}
				fr.readAsText(file);
			}
		});
	}


	exec(finishfunc)
	{
		this.promise.then( finishfunc ).catch(
			function(errors){
				MainButtonActions.exitToMenu();

				if (BenchStopwatch.__timeStart !== null ){
					BenchStopwatch.terminate();
				}

				utility.notify("Check your inputs", errors, 10);
			}
		);
	}
}




// Works, but convoluted

/*
class PromiseQueue_eski {

	//https://jsfiddle.net/Lsobypup/

	constructor(jobfunc){
		this.jobs = [];
		this.async_task = jobfunc;
	}

	
	addJob(job){


		console.log("---Queuing:", job.file.name)

		var p1 = job;
		this.jobs.push(p1);
	}

	

	static pFileRead(file, task){
		return new Promise((resolve, reject) => {
			var fr = new FileReader();
			
			fr.onload = function(e){
	    		task(e.target.result);
	    		resolve();
	    	}
			fr.readAsText(file);
		});
	}


	exec(finishfunc)
	{
		var inputs = this.jobs;
		var promise = Promise.resolve();

		inputs.map(
			file_and_task => promise = promise.then(
				() => PromiseQueue.pFileRead(file_and_task.file, file_and_task.task)
			)
		);

		promise.then( finishfunc );
	}
}



class Queue2 {

	constructor(task){
		this.activejobs = [];
		this.jobtask = task;
		this.run = null;
	}

	addJob(job){
		console.log("---Queuing2:", job.file.name);
		this.activejobs.push( job );
	}

	exec1(finish){
		//Try launching them one after the other
		for (var f=0; f < this.activejobs.length; f++)
		{
			var job = this.activejobs[f];
			console.log("---Processing", job.file.name )
			Queue2.readFile( job );
		}
		finish();
	}

	rchain(finish)
	{
		if (this.activejobs.length == 0){
			finish();
			return 0
		}
		
		var job = this.activejobs.pop();
		console.log("THINK", job.file.name);
		this.jobtask( job, this.rchain(finish))
	}

	exec3(finish)
	{
		this.activejobs = this.activejobs.reverse();
		this.rchain(finish);
	}

	exec2(finish){

		var that = this;
		var nextjob = finish;
		for (var f = this.activejobs.length -1; f >=0; f--)
		{
			var job = this.activejobs[f];

			bind(this.run, function(){
				console.log("---Processing", job.file.name )
				that.jobtask( job, nextjob );
			});

			that.run = this.run;
			nextjob = that.run;
		}

		this.run();

	}

	static readFile(fac){
	    var fr = new FileReader();

	    fr.onloadend = function(e){
	    	fac.task(e.target.result);
	    	return 0;
    	};
	    fr.readAsText(fac.file);
	}
}




class Queuer {

	constructor(task){
		this.firstjob = function(){};
		this.triggerjobs = false; // set externally
		this.jobtask = task;
	}

	addJob(job) {
	    console.log("---Queuing:", job.file.name);

	    // Run jobs immediately if trigger pulled
	    if (this.triggerjobs){
	    	this.jobtask({file:job.file, task:function(text){
	    		console.log("---Triggered", job.file.name);
	    		job.task(text);
	    	}});
	    	return 0;
	    }

        // Otherwise  - store previous job 
	    var lastjob = this.firstjob;

	    var that = this;

	    // Create new job that passes the previous job
	    // as a readbeforefunc argument to new job.
	    this.firstjob = function(finish){
	        lastjob();
	        that.jobtask({file:job.file, task:function(text){
	          	console.log("---Processing:", job.file.name)
	           	job.task(text)
	    	}}, finish);
	   	}
	}

	exec(finishfunc){
		this.firstjob(finishfunc);
	}
}*/

var MarkerData = {
	rs_array: [], // rsid
	gp_array: [], // genpos

	padded: [], // what is displayed (rsid + genpos);

	// Not 10 causes formatting problems in haplomode
	maxlen_marker : 10,
	hasGPData: false,

	getLength(){
		return MarkerData.padded.length;
	},

	addMarkers(data){
		MarkerData.rs_array = data;
	},

	addGenePos(data){
		MarkerData.gp_array = data;
	},

	sanityCheck(){
		if (MarkerData.padded.length > 0){
			if (MarkerData.gp_array.length !== MarkerData.rs_array.length){
				console.log("GP array and RS array do not match",
					MarkerData.gp_array.length,
					MarkerData.rs_array.length);
				throw new Error();
			}
		}
	},

	// "Pads rs identifiers into fixed width string based on max length
	padMarkerMap(){
		var format = "            ",
			withgp = MarkerData.gp_array.length > 1 ;


		for (var i=0; i < MarkerData.rs_array.length; i++){
			MarkerData.padded[i] = (MarkerData.rs_array[i] + format).slice(0,MarkerData.maxlen_marker);

			if (withgp){
				MarkerData.padded[i] += " : " + (MarkerData.gp_array[i] + format).slice(0,5); // 5 sf
			}
		}
		MarkerData.hasGPData = withgp

		// Also set display format
		HaploBlockFormat.hasGPData(withgp);
	},


	clear(){
		MarkerData.rs_array = [];
		MarkerData.gp_array = [];
	}
}

var Pedfile = {

	__tmpfamdata : {}, // fid --> stored position
	
	import: function(text_unformatted){

		var text = text_unformatted.split('\n');

		var fid_graphics = {}; // swap the graphics stuff for the serialparse method later.

		for (var l=0; l< text.length; l++)
		{
			var line = text[l];
	
			if (line.length < 5 ){continue};

			// family lines first
			if (line.startsWith("////")){
				var fid_gfx = line.split("////")[1].split('\t');
				fid_graphics[fid_gfx[0]] = JSON.parse(fid_gfx[1]);
				continue;
			}

			// Split in to Data and Metadata parts		
			var data_and_meta = line.split('//');

			//Handle Person info
			var data_part = data_and_meta[0];
			var people_info = data_part.trim().split(/\s+/).map(x => Number(x));

			var fam = people_info[0], id  = people_info[1],
				pat = people_info[2], mat = people_info[3],
				sex = people_info[4], aff = people_info[5];

			var pers = new Person(id, sex, aff, mat, pat);
			familyMapOps.insertPerc(pers, fam);

			// Handle Meta
			if (data_and_meta.length === 2){
				var meta = JSON.parse(data_and_meta[1])

				// Holds graphics, person's name, other meta
				familyMapOps.getPerc(id,fam).stored_meta = meta;
			}
		}

		// Family meta
		for (var fid in fid_graphics){
			var pos = fid_graphics[fid];
			Pedfile.__tmpfamdata[fid] = pos;  // passed onto init_graph
		}
	},

	exportToTab: function(store_graphics){
		exportToTab(Pedfile.export(store_graphics));
	},


	export: function(store_graphics)
	{
		var text = "";

		// Family-header specific 
		if (store_graphics)
		{
			var fid_array = []
			uniqueGraphOps.foreachfam(function(fid,fam_group){
				fid_array.push( "////" + fid +'\t' + JSON.stringify(fam_group.group.getAbsolutePosition()) );
			});
			text += fid_array.join('\n');
		}

		// Person specific
		familyMapOps.foreachperc(function(pid, fid, perc)
		{
			var array = [
				fid, 
				perc.id, 
				perc.father.id || 0, 
				perc.mother.id || 0, 
				perc.gender, perc.affected
			]

			if (store_graphics){
				var gfx = uniqueGraphOps.getNode(pid, fid);

				if (gfx===-1 || gfx.graphics === null){
					console.log("[Error]", pid,fid,"does not have any graphics...");
				}
				else {
					var meta = gfx.graphics.getPosition();
					meta.name = perc.name

					array.push( "//", JSON.stringify(meta));
				}
			}
			text += "\n"+ array.join('\t');
		});

		return text;	
	},


	pedigreeChanged: function(){
		var current_pedigree = Pedfile.export(true), /* local saves _always_ store graphics */
			stored_pedigree = localStorage.getItem(localStor.ped_save);

//		console.log("current", current_pedigree);
//		console.log("stored", stored_pedigree);

		if (current_pedigree.trim().length < 1){
			return false;
		}

		if (stored_pedigree == null){
			return true;
		}

		if (current_pedigree !== stored_pedigree){
			return true;
		}
		return false;
	},
}

//debugAllegro = {}

class Allegro extends FileFormat {
	
	constructor(mode_init = null, fed_data = null){

		var haplo = {
			id: "allegro_haplo",
			hasMarkerNames : true,
			process : function(haplo_text){
				//debugAllegro.haplo = haplo_text;
				Allegro.__populateFamilyAndHaploMap(haplo_text);
			}
		}

		if (fed_data !== null){
			haplo.fed_data = fed_data;
		}

		var map = {
			id: "allegro_map",
			process: function(map_text){
				//debugAllegro.map = map_text;
				Allegro.__populateGeneticPositions(map_text);
			}
		}

		var descent = {
			id: "allegro_descent",
			process: function(descent_text){
				//debugAllegro.descent = descent_text;
				Allegro.__populateFlow(descent_text);
			},
			resolver_mode: AssignHGroups.resolvers.FLOW
		}
		super(haplo, map, null, descent, mode_init);
	}


	static __populateFlow(text_unformatted){
		Allegro.__populateFamilyAndHaploMap(text_unformatted, true);
	}

	static __populateFamilyAndHaploMap(text_unformatted, founder = false){

		console.log("populateFamAndHapMap")

		var lines = text_unformatted.split('\n'),
			haplo_start_col = -1;

		var header_lines = [];
	
		for (var l=0; l < lines.length; l++){
			var line = lines[l];
	
			if (line.length < 5 ){
				continue
			};

			// Add to header data for later processing.	
			if (line.substr(0,1) === " ") {                        //Temp store header data
				haplo_start_col = line.lastIndexOf("    ") +4;     //
				header_lines.push( line );
				continue;
			}
	
			//Populate family map
			var people_info = line
				.substring(0, haplo_start_col - 1)
				.trim()
				.split(/\s+/).map(x => parseInt(x));

			var haplo_data = line
				.substring(haplo_start_col)
				.trim()
				.split(/\s+/)
				.map(x => parseInt(x));

			
			//Handle Person info
			var fam = people_info[0], id  = people_info[1],
				pat = people_info[2], mat = people_info[3],
				sex = people_info[4], aff = people_info[5];

			var pers;
	
			if (familyMapOps.percExists(id,fam)){
				pers = familyMapOps.getPerc(id,fam);
			
			} else {
				pers = new Person(id, sex, aff, mat, pat);
				familyMapOps.insertPerc(pers, fam);
			}

			// Handle HaploData
			if (founder){
				FlowResolver.convertGroupsToFamilySpecific( haplo_data, fam);
				pers.insertFlowData ( haplo_data );
			} else {
				pers.insertHaploData( haplo_data );
			}
		}

		Allegro.__handleHeaders(header_lines, haplo_start_col);
	}

	// Transpose marker names
	static __handleHeaders(header_lines, start_col)
	{
		if (MarkerData.getLength() !== 0){
			console.log("Markers already populated, skipping");
			return 0;
		}

		var markers = []

		for (var col = start_col; col < header_lines[0].length; col++)
		{
			var col_string = "";

			for (var row=header_lines.length; row > 0 ;){
				col_string += header_lines[--row][col];
			}

			col_string = col_string.trim();

			if (col_string!==""){
				markers.push( col_string );
			}
		}

		var expected_num = familyMapOps.getRandomPerc().haplo_data[0].data_array.length,
			actual_num = markers.length;

		if (expected_num !== actual_num){
			throw new Error("Error, allele sizes do not match:" 
				+ expected_num + " != " + actual_num);
		}

		MarkerData.addMarkers( markers );
	}

	static __populateGeneticPositions(text_unformatted)
	{		
		if (MarkerData.gp_array.length !== 0){
			console.log("GP data already populated");
			return 0;
		}

		var lines = text_unformatted.split('\n'),
			len = lines.length,
			markers = [];

		for (var l=1; l < len; l++)
		{
			var line = lines[l].trim();

			if (line.length > 0){
				var chr_genpos_marker_physpos_nr = line.split(/\s+/),
					genpos = chr_genpos_marker_physpos_nr[1];

				markers.push( Number(genpos) );
			}
		}

		MarkerData.addGenePos( markers );
//		MarkerData.sanityCheck();
	}
}

debugGH = {};

class Genehunter extends FileFormat {
	
	constructor(mode_init = null){

		var haplo = {
			id: "ghm_haplo",
			process: function(haplo_text){
				debugGH.haplo = haplo_text;
				Genehunter.populateFamilyAndHaploMap(haplo_text);
			},
			hasMarkerNames : false,
			inferGenders : true // unless ped is uploaded!
		}

		var map = {
			id: "ghm_map",
			process: function(map_text){
				debugGH.map = map_text;
				Genehunter.populateMarkerMap(map_text);
			}
		}

		var ped = {
			id: "ghm_ped",
			process: FileFormat.updateFamily
		}

		super(haplo, map, ped, null, mode_init);
		
	}

	static populateMarkerMap(text_unformatted){
		var lines = text_unformatted.split('\n'),
			current_chrom = null;

		// Skip header
		var markers = [],
			gps = [];

		for (var l=1; l < lines.length; l++){
			var line = lines[l].trim(),
				tokens = line.split(/\s+/);

			if (line === ""){
				continue;
			}

			if (current_chrom === null){
				current_chrom = tokens[0]
			}
			else if (current_chrom !== tokens[0]){
				throw new Error("Chrom changed from "+ current_chrom + " to " + tokens[0])
			}

			var genpos = Number(tokens[1]),
				marker = tokens[2].trim();


			markers.push(marker);
			gps.push(genpos);
		}

		MarkerData.addGenePos( gps );
		MarkerData.addMarkers( markers );
	}

	static populateFamilyMap(text_unformatted)
	{

	}

	static populateFamilyAndHaploMap(text_unformatted){
		
		var lines = text_unformatted.split('\n'),
			tmp_perc = null,
			current_fam = null;

		for (var l=0; l < lines.length; l++)
		{
			var line = lines[l];

			// New family line
			if (line.startsWith("*****")){
				var star_fam_score = line.split(/\s+/);
				current_fam = parseInt(star_fam_score[1]);
				continue;
			}

			var tokens = line.trim().split(/\s+/).map(function(a){
				return parseInt(a);
			});

			// Second Allele, finish and insert into family ap
			if (( line.startsWith("   ") || line.startsWith('\t\t')) && tmp_perc!==null){
				var haplo2 = tokens;

				tmp_perc.insertHaploData(haplo2);

				familyMapOps.insertPerc(tmp_perc, current_fam);		
				tmp_perc = null;
				continue
			}

			// First Allele and person data
			var haplo1 = tokens.splice(4),
				pdata = tokens;

			var person = new Person(
				pdata[0], //id
					  0, //gender -- undeclared, inferred from parentage
				pdata[3], //affected
				pdata[2], //mother
				pdata[1]  //father
			);
			person.insertHaploData(haplo1);

			tmp_perc = person;
		}
	}
}


class Simwalk extends FileFormat {

	constructor(mode_init = null)
	{
		var use_descent = document.getElementById('sw_infer_box').checked;

		console.log("use descent", use_descent)

		var haplo = {
			id: "sw_haplo",
			process: function(haplo_text){
				Simwalk.populateFamHaploAndDesc(haplo_text, use_descent);
			},
			useDescent : use_descent,
			resolver_mode: AssignHGroups.resolvers.DESCENT, //only used if use_descent true
			hasMarkerNames : true
		}

		// Simwalk HEF files have rs and gp marker data, as well as ped and haplo
		super(haplo, null, null, null, mode_init);
	}


	static populateFamHaploAndDesc(text_unformatted, use_descent = false){

		var lines = text_unformatted.split('\n');

		var marker_header_found = false,
			pedname_header_found = false;

		// Populate Marker
		var markers = [],
			genepos = [];

		var l = 0;
		for (;l < lines.length; l++)
		{
			var line = lines[l];
			//console.log(line)

			if (line.startsWith("Marker")){
				//console.log("found marker line")
				marker_header_found = true;
				continue
			}

			if (line.startsWith("Pedigree Name")){
				//console.log("found pedigree line")
				pedname_header_found = true;
				break;
			}

			if (marker_header_found){
				if (!pedname_header_found)
				{
					if (!line.startsWith(" ")){
						// console.log("found marker line!", line);
						var markerdata = line.split(/\s+/);
						markers.push( markerdata[0].trim()  );
						genepos.push( Number(markerdata[1]) );
					}
				}
			}
		}
		MarkerData.addMarkers( markers );
		MarkerData.addGenePos( genepos )
		// console.log("finished marker data");

		//Ped Name
		var dashedlines_found = false,
			tmp = {
				_fam : null,
				_perc : null,
				_allpat : [],  // alleles
				_allmat : [],
				_decpat : [], // descent
				_decmat : []
			};


		function insertDat(tmp){
			if (tmp._allpat.length > 0){
				// console.log("appending haplo data to", tmp_perc.id)
				tmp._perc.insertHaploData(tmp._allpat);
				tmp._perc.insertHaploData(tmp._allmat);

				if (use_descent){
//					console.log("use_descent", tmp_decpat, tmp_decmat);
					tmp._perc.insertDescentData(tmp._decpat); // paternal first
					tmp._perc.insertDescentData(tmp._decmat); // maternal second
				}

				tmp._perc = null;
				tmp._allmat = [];
				tmp._allpat = [];
				tmp._decpat = [];
				tmp._decmat = [];
			}
		}


		for (; l < lines.length; l++){
			var line = lines[l];

			if (line.startsWith("________")){

				// Flush data from last perc if new fam found
				if (tmp._perc !== null){
					insertDat( tmp );
				}

				dashedlines_found = true;
				continue;
			}

			if (dashedlines_found && !line.startsWith(" "))
			{
				var fam = line.split("(")[0].trim();
				tmp._fam = fam;
				dashedlines_found = false;
				// console.log("identified fam", tmp_fam, line)
				continue
			}


			var tokens = line.trim().split(/\s+/);
			// console.log(tokens.length, tokens)

			// Person Data
			if (tmp._fam !== null && tokens.length===5){

				insertDat(tmp);

				var id = parseInt(tokens[0]),
					father_id = parseInt(tokens[1]),
					mother_id = parseInt(tokens[2]),
					gender = parseInt(tokens[3]),
					affected = parseInt(tokens[4]);

				var perc = new Person(id, gender, affected, mother_id, father_id);
				// console.log("found new perc", perc)

				familyMapOps.insertPerc(perc, tmp._fam);
				tmp._perc = familyMapOps.getPerc(perc.id, tmp._fam);

				//continue
			}

			//Allele Data
			if (tmp._fam !== null && tmp._perc !== null && tokens.length === 6){
				tokens = tokens.map(x=> parseInt(x));

				tmp._allpat.push( tokens[0] );
				tmp._allmat.push( tokens[1] );

				if (use_descent){
					tmp._decpat.push( tokens[2] );
					tmp._decmat.push( tokens[3] );
				}
			}
		}
	}


	static populateMarkerMap(text_unformatted){}

	

}

var debugMerlin = {};


class Merlin extends FileFormat {

	constructor(mode_init = null)
	{
		var haplo = {
			id: "merlin_haplo",
			process: function(haplo_text){
				debugMerlin.haplo = haplo_text;
				Merlin.populateFamilyAndHaploMap(haplo_text);
			},
			hasMarkerNames : false,
			inferGenders : true,
		}

		var descent = {
			id: "merlin_descent",
			process: function(descent_text){
				debugMerlin.descent = descent_text;
				Merlin.populateFlow(descent_text);
			},
			resolver_mode: AssignHGroups.resolvers.FLOW
		}

		var map = {
			id: "merlin_map",
			process : Merlin.populateMarkerMap
		}

		var pedin = {
			id: "merlin_ped",
			process : FileFormat.updateFamily
		}

		super(haplo, map, pedin, descent, mode_init);
	}

	static populateFlow(text_unformatted){
		Merlin.populateFamilyAndHaploMap(text_unformatted, true);
	}


	static populateFamilyAndHaploMap(text_unformatted, flow = false){
		//console.log("::"+(flow?"Flow":"Chr")+" --- start");

		var lines = text_unformatted.split('\n');

		var tmp = {
			_fam : null,
			_perc_array : [], // horizontal percs
			_alleles_array : [] // vertical haplos [ [[],[]] , [[],[]] ]
		}



		function flushTmpData(tmp){
			// Finish populating alleles and insert percs
			if (tmp._perc_array.length > 0)
			{
				if (tmp._perc_array.length !== tmp._alleles_array.length){
					console.log("Length mismatch");
					throw new Error("");
				}


				for (var tpa=0; tpa < tmp._perc_array.length; tpa ++)
				{
					var perc_alleles = tmp._alleles_array[tpa],
						perc = tmp._perc_array[tpa];


					if (flow){ // flow relies on prior perc existence
						var perc = familyMapOps.getPerc(perc.id, tmp._fam);
						perc.insertFlowData( perc_alleles[0] );
						perc.insertFlowData( perc_alleles[1] );
						//console.log("INSERTING FLOW", perc.id, perc.haplo_data[0].flow);
					}
					else {
						perc.insertHaploData( perc_alleles[0] )
						perc.insertHaploData( perc_alleles[1] )
						familyMapOps.insertPerc(perc, Number(tmp._fam));
					}
				}

				tmp._perc_array = [];
				tmp._alleles_array = [];
			}
		}




		// Populate Marker
		for (var l=0; l < lines.length; l++)
		{
			var line = lines[l];

			if (line.startsWith("FAMILY")){

				flushTmpData(tmp);

				var fid = line.split(/\s+/)[1]
				tmp._fam = Number(fid);
				continue
			}


			if (tmp._perc_array.length === 0){
				// Hunt for names
				if (line.indexOf('(')!==-1 && line.indexOf(')')!==-1)
				{
					var people = line.trim().split(/\s{2,}/);

					for (var p=0; p < people.length; p++)
					{
						var perc = people[p].split(" ");

						var id = Number(perc[0]),
							parents = perc[1].split("(")[1].split(")")[0];

						var mother_id = 0,
							father_id = 0;

						if (parents !== "F"){
							parents = parents.split(",").map(x => Number(x));
							
							mother_id = parents[0];
							father_id = parents[1];
						}

						// Gender's and Affecteds are unknown.
						// Gender's can be inferred, but affectation needs a ped file
						var newp = new Person(id, 0, 0, mother_id, father_id);
						tmp._perc_array.push(newp);
						tmp._alleles_array.push([ [],[] ])
					}
				}
				continue;
			}

			var trimmed = line.trim();
			if (trimmed.length == 0){
				flushTmpData(tmp);
				continue;
			}

			//Allele lines
			var multiple_alleles = trimmed.split(/\s{3,}/);

			if (multiple_alleles.length  !== tmp._perc_array.length){
				console.log(trimmed, multiple_alleles, tmp._perc_array)
				throw new Error("Num alleles and num percs do not align");
			}

			for (var a=0; a < multiple_alleles.length; a++)
			{
				var alleles = multiple_alleles[a],
					left_right = null;

				if (!flow){
					// We ignore all types of phasing and for 
					// ambiguously marker alleles "A", we pick the
					// first (this holds consistent for inherited).
					//var left_right = alleles.split(/\s[+:|\\/]\s/)

					left_right = alleles.split(/\s[^\d]\s/)
						.map(x=> Number(
							x.split(",")[0]
							 .replace("A","")
							 //.replace("?","9")
						));
				}
				else {
					left_right = alleles.split(/\s[^\d]\s/);
					FlowResolver.convertGroupsToFamilySpecific(left_right, tmp._fam);
				}

				tmp._alleles_array[a][0].push(left_right[0]);
				tmp._alleles_array[a][1].push(left_right[1]);
			}
		}
		flushTmpData(tmp);

		//console.log("::"+(flow?"Flow":"Chr")+" --- finish");
	}

	static populateMarkerMap(text_unformatted){
		//console.log("::Map --- start");

		debugMerlin.map = text_unformatted;

		var lines = text_unformatted.split('\n');

		var markers = [],
			genepos = [];

		for (var l=1; l < lines.length; l++){ //skip headers

			var line = lines[l].trim()

			if (line === ""){
				continue;
			}

			var chr_genpos_marker = line.split(/\s+/);

//			console.log(chr_genpos_marker, chr_genpos_marker.length, line);
			markers.push( chr_genpos_marker[2].trim()  )
			genepos.push( Number(chr_genpos_marker[1]) );
		}

		MarkerData.addMarkers( markers );
		MarkerData.addGenePos( genepos );

		//console.log("::Map --- finish");
	}
}
//Keyboard

var Keyboard = {
	
	__map : {
		"Control" : false,
		"Shift": false,
		"ArrowDown": false,
		"ArrowUp" : false,
		"PageDown" : false,
		"PageUp" : false
	},

	overridewindowdefaults: false,

	__listening: false, 

	__pause_state: null,	// Pausing is useful for input entering operations.
	__tmptasks : [],        // holds each layer of up and down tasks, pops/pushes each 

	__dn_tasks : {},  // keydn --> function()
	__up_tasks : {},    // keyup --> function()


	// -- Layer handling

	/** Store previous config and override if neccesary, restoring on layerOff **/	
	layerOn(name, replace = true){
		Keyboard.__beginListen();

		Keyboard.__tmptasks.push([ name, Keyboard.__dn_tasks, Keyboard.__up_tasks ])

		if (replace){
			Keyboard.__dn_tasks = {};
			Keyboard.__up_tasks = {};
		}
	},

/*	layerOff(){
		var dnup_tasks = Keyboard.__tmptasks.pop();

		if (dnup_tasks === undefined){
			console.log("nothing to pop");
			return -1;
		}

		Keyboard.__dn_tasks = dnup_tasks[1];
		Keyboard.__up_tasks = dnup_tasks[2];

		if (Keyboard.__tmptasks.length == 0){
			Keyboard.__endListen(); //No tasks to process
		}
	},*/

	layerOff(){
		if (Keyboard.__tmptasks.length === 0){
			console.log("No layer to pop");
			Keyboard.__endListen();
			return -1;
		}

		var dnup_tasks = Keyboard.__tmptasks.pop();
		Keyboard.__dn_tasks = dnup_tasks[1];
		Keyboard.__up_tasks = dnup_tasks[2];
	},

	__prevlistenstate: null,

	pause(){
		Keyboard.__prevlistenstate = Keyboard.__listening;
		Keyboard.__endListen();
	},
	
	unpause(){
		if (Keyboard.__prevlistenstate){
			Keyboard.__beginListen();
		}
		Keyboard.__prevlistenstate = null;
	},




	// Private
	__begin(func1 = null, func2 = null){
		if (func1 === null){
			func1 = Keyboard.__processKeyDown;
			func2 = Keyboard.__processKeyUp;
		}

//		console.trace("begin");
		document.addEventListener("keydown", func1, false);
		document.addEventListener("keyup",   func2, false);
	},

	__end(func1 = null, func2 = null){
		if (func1 === null){
			func1 = Keyboard.__processKeyDown;
			func2 = Keyboard.__processKeyUp;
		}

//		console.trace("end");
		document.removeEventListener("keydown", func1, false);
		document.removeEventListener("keyup",   func2, false);
	},

	__beginListen(){
		if (!Keyboard.__listening){
			Keyboard.__begin();
			Keyboard.__listening = true;
		}
	},

	__endListen(){
		if (Keyboard.__listening){
			Keyboard.__end();
			Keyboard.__listening = false;
		}
	},


	__processKeyDown(event){
		if (Keyboard.overridewindowdefaults){
			event.preventDefault();
			event.stopPropagation();
		}

		Keyboard.__map[event.key] = true;

		if (event.key in Keyboard.__dn_tasks){
			Keyboard.__dn_tasks[event.key]();
		}
	},

	__processKeyUp(event){
		Keyboard.__map[event.key] = false;

		if (event.key in Keyboard.__up_tasks){
			Keyboard.__up_tasks[event.key]();
		}
	},




	//  -- Key tasks
	addKeyPressTask(key, func, modifier_key = null){

		if (key in Keyboard.__dn_tasks){
			console.warn("This will override the down AND up tasks for "+ key);
		}

		Keyboard.__dn_tasks[key] = function(){
			func.pressed = true;
		};

		Keyboard.__up_tasks[key] = function(){

			if (modifier_key !== null){
				if (!(Keyboard.isPressed( modifier_key ))){
					return -1;
				}
			}

			if (func.pressed){
				func();
			}
			func.pressed = false;
		};
	},

	removeKeyPressTask(key){
		if (key in Keyboard.__dn_tasks){
			delete Keyboard.__dn_tasks[key];
			delete Keyboard.__up_tasks[key];
			return 0;
		}
		console.warn(key,"not in down tasks (or up tasks)?");
	},

	addKeyUpTask(key, func){
		if (key in Keyboard.__up_tasks){
			console.warn("This will override the up task for "+key);
		}
		Keyboard.__up_tasks[key] = func;
	},

	removeKeyUpTask(key){
		if (key in Keyboard.__up_tasks){
			delete Keyboard.__up_tasks[key];
			return 0;
		}
		console.warn(key, "not in keyup tasks");
	},


	addKeyDownTask(key, func){
		if (key in Keyboard.__dn_tasks){
			throw new Error("This will override the down task for "+key);
		}
		Keyboard.__dn_tasks[key] = func;
	},

	removeKeyDownTask(key){
		if (key in Keyboard.__dn_tasks){
			delete Keyboard.__dn_tasks[key];
			return 0;
		}
		console.error(key+" not in keydown tasks");
	},

	isPressed(key){
		if (key in Keyboard.__map){
			return Keyboard.__map[key];
		}
		// otherwise insert it and set false
		Keyboard.__map[key] = false;
		return false
	},

	isShiftDown(){
		return Keyboard.isPressed("Shift");
	},


	isCtrlDown(){
		return Keyboard.isPressed("Control");
	},

	noKeysPressed(){
		for (var key in Keyboard.__map){
			if (Keyboard.__map[key]){
				console.log(key);
				return false;
			}
		}
		return true;
	},


	setCombo(callback){
		Keyboard.pause()

		function upper(){
			if(Keyboard.noKeysPressed){
				callback(Keyboard.__tempcombo)
			}
			Keyboard.__end(Keyboard.__getCombo, upper);
			Keyboard.unpause();
		}

		Keyboard.__begin(Keyboard.__getCombo, upper);
	},

	__getCombo(evt){

		// Stop browser events
//		console.log(evt)
		evt.preventDefault();
		evt.stopPropagation();

		var key = null;

		switch(evt.key){
			case "Control":
			case "Shift":
			case "Alt": key = '?'; break;
			default: key = evt.key; break
		}

		var ctrl = evt.ctrlKey,
			shift = evt.shiftKey,
			alt = evt.altKey;

		if (key.length === 1){
			key = key.toUpperCase();
		}

		//Test for common window bindings
/*		if (ctrl && !alt && !shift){
			var role = "";
			switch(key){
				case "S":role="Save";break;
				case "F":role="Find";break;
				case "G":role="Find";break;
				case "K":role="Search";break;
				case "C":role="Copy";break;
				case "V":role="Paste";break;
				case "D":role="Favourites"; break;
				case "J":role="Downloads"; break
			}
		}*/


		Keyboard.__tempcombo = (ctrl?"Ctrl+":"")+(alt?"Alt+":"")+(shift?"Shift+":"")+key;

	}
}

var MouseStyle = {
	
	restoreCursor(){document.body.style.cursor = "";},

	//"url('styles/Precision.cur'),auto";
	changeToArrowCursor(){document.body.style.cursor = "crosshair";},
	changeToGrab(){document.body.style.cursor = "move";}, // grab no chrome support..
	changeToMove(){document.body.style.cursor = "move";},
	changeToPointer(){document.body.style.cursor = "pointer";},

	changeToVerticalN(){document.body.style.cursor = "n-resize";},
	changeToVerticalS(){document.body.style.cursor = "s-resize";},
}



var SerialParse = {

	Canvas : {
		export : function(){
			let canv = document.getElementsByTagName('canvas');

			let export_text = ""
			for (let c=0; c < canv.length; c++){
				let cnv = canv[c].toDataURL("image/png");

				export_text += '<img src="' + cnv + '"/>';
			}
			exportToTab( export_text );
		}
	},

	Marker: {
		import : function(string){
			var rs_gp = string.split('|');

			MarkerData.rs_array = rs_gp[0].split("rs_array:")[1].trim().split(",");
			MarkerData.gp_array = rs_gp[1].split("gp_array:")[1].trim().split(",");	
		},

		export : function(){
			return "rs_array:"+ MarkerData.rs_array.join(",")
				+ '|'
				+ "gp_array:" + MarkerData.gp_array.join(",");
		}
	},

	HGroups: {
		import : function(string){
			var un_hg = string.split('|');

			FounderColor.unique = JSON.parse(un_hg[0]);
			FounderColor.hgroup = JSON.parse(un_hg[1]);
		},

		export : function(){
			return JSON.stringify(FounderColor.unique)
				+ '|' + JSON.stringify(FounderColor.hgroup);
		}
	},
	
	// Fam + Graphics
	Person : {
		import : function(string){
			var tokens = string.split(",");

			var id = parseInt(tokens[0]),
				mother_id = parseInt(tokens[1]),
				father_id = parseInt(tokens[2]),
				gender = parseInt(tokens[3]),
				affected = parseInt(tokens[4]),
				name = tokens[5] === "null"?null:tokens[5].trim(),
				graphics = {x:Number(tokens[6]),y:Number(tokens[7])};

			var person = new Person(id, gender, affected, mother_id, father_id, name);
			var haplo_data = SerialParse.Alleles.import( tokens[8].trim() );

			person.stored_meta = graphics;

			person.insertHaploData(haplo_data[0].data);
			person.setHaplogroupArray(haplo_data[0].haplo);
			person.insertHaploData(haplo_data[1].data);
			person.setHaplogroupArray(haplo_data[1].haplo)

			return person;
		},

		export : function(id, fam){

			var person = familyMapOps.getPerc(id, fam),
				graphx = uniqueGraphOps.getNode(id, fam).graphics;

			return [person.id,
				person.mother.id||0,
				person.father.id||0,
				person.gender,
				person.affected,
				person.name||"null",
				graphx.getX(),
				graphx.getY(),
				SerialParse.Alleles.export(person),
				].join(",");
		}	
	},

	Alleles : {
		import : function(string){
			var tokens = string.split("%");

			return {
				0: {
					data : tokens[0].split(" ").map(x => Number(x)),
					haplo: tokens[1].split(" ").map(x => Number(x))
				},
				1: {
					data : tokens[2].split(" ").map(x => Number(x)),
					haplo: tokens[3].split(" ").map(x => Number(x))
				}
			}
		},

		export : function(person){
			return person.haplo_data[0].data_array.join(" ")
			 +"%"+ person.haplo_data[0].haplogroup_array.join(" ")
			 +"%"+ person.haplo_data[1].data_array.join(" ")
			 +"%"+ person.haplo_data[1].haplogroup_array.join(" ");
		}
	},


	// Fam + Graphics
	All : {

		_delims : {
			begin : "::",
			marker : "$$",
			fidsep : "|",
			colors : "&&",
		},

		export: function()
		{
			var outstring = ""

			familyMapOps.foreachperc(function(pid, fid)
			{
				outstring += fid + SerialParse.All._delims.fidsep
					+ SerialParse.Person.export(pid, fid)
					+ '\n';
			});

			uniqueGraphOps.foreachfam(function(fid, famgroup)
			{
				var grfx = famgroup.group;

				outstring += SerialParse.All._delims.begin
					+ fid + SerialParse.All._delims.fidsep
					+ grfx.getX()
					+ ","
					+ grfx.getY()
					+ '\n';
			});

			outstring += SerialParse.All._delims.marker + SerialParse.Marker.export();
			outstring += '\n' + SerialParse.All._delims.colors + SerialParse.HGroups.export();

			return outstring;
		},

		import: function(famstring){
			var lines = famstring.split('\n');

			console.groupCollapsed("Serial Parse Import")

			for (var l=0; l < lines.length; l++){
				var line = lines[l];

				if (line.startsWith(SerialParse.All._delims.marker)){
					var data = line.split(SerialParse.All._delims.marker)[1];
					SerialParse.Marker.import(data);
				}

				else if (line.startsWith(SerialParse.All._delims.colors)){
					var data = line.split(SerialParse.All._delims.colors)[1];
					SerialParse.HGroups.import(data);
				}

				else if (line.startsWith(SerialParse.All._delims.begin)){
					// Fam data
					var fid_graphics = line.split(SerialParse.All._delims.begin)[1]
						.split(SerialParse.All._delims.fidsep);

					var fid = Number(fid_graphics[0]),
						graphics = fid_graphics[1].split(",").map(Number);

					var fam_group = Graphics.Pedigree.addFamily(fid, graphics[0], graphics[1]);

					uniqueGraphOps.insertFam(fid, fam_group);
					// familyMapOps.insertFam is performed automatically at person level.
				}


				else {
					// Person data
					var fid_perc = line.split(SerialParse.All._delims.fidsep);

					var fid  = Number(fid_perc[0]),
						perc = fid_perc[1].trim();

					var person = SerialParse.Person.import(perc);

					familyMapOps.insertPerc(person, fid);
				}
			}
			console.groupEnd();
		}
	}
}



var messProps = {
	_header : document.getElementById('message_head'),
	_text   : document.getElementById('message_text'),
	_exit : document.getElementById('message_exit'),
	_box : document.getElementById('message_props'),
	_buttonrow : document.getElementById('message_buttonsrow'),
	_yes : document.getElementById('message_yes'),
	_no : document.getElementById('message_no'),
	_inputrow : document.getElementById("message_inputrow"),
	_input : document.getElementById("message_input"),
	_submit : document.getElementById("message_submit"),

	_aftercallbacks: function(){
		this.hide();
		utility.hideBG();
		this._inputrow.style.display = "block";
		this._text.style.display = "block";
	},

	hide: function(){ 
		Keyboard.unpause()
		this._box.style.display = "none";
		this._box.style.zIndex = -99;
	},
	show: function(){ 
		Keyboard.pause()
		this._box.style.display = "block";
		this._box.style.zIndex = 502;
		this._input.focus();
	},


	display: function(header,text, exit_callback = null, yes_no_object = null, submit=false)
	{
		this.show();

		// must occur after this.show();
		utility.showBG(function(){
			messProps.hide();
		});

		this._header.innerHTML = header;
		this._text.innerHTML   = text;

		/* On Exit */
		this._exit.onclick = function(){
			if (exit_callback !== null){exit_callback()};
			messProps._aftercallbacks();
		};

		/*Submit */
		if (submit){
			this._buttonrow.style.display = "none";
			this._inputrow.style.display = "block";
			
			this._submit.value = "Submit";
			var that = this;
			this._submit.onclick = function(){
				submit(that._input.value);
				that._exit.onclick();
			}
		}


		/* Yes No*/
		if (yes_no_object === null){
			this._buttonrow.style.display= "none";
			this._no.value   = this._yes.value   = "";
			this._no.onclick = this._yes.onclick = null;
		}
		else
		/* Input box */
		{
			this._buttonrow.style.display = "block";
			this._inputrow.style.display = "none";

			if (yes_no_object.yes !== null)
			{
				this._yes.value = yes_no_object.yes;
				this._yes.onclick = function()
				{
					yes_no_object.yescallback();
					messProps._aftercallbacks();
				};
			};

			if (yes_no_object.no !== null)
			{
				this._no.value = yes_no_object.no;
				this._no.onclick = function()
				{
					yes_no_object.nocallback();
					messProps._aftercallbacks();
				}
			};

		}
	},

	prompt: function(header, text, yes, onYes, no, onNo)
	{
		var promptcallback = { 
			yes: yes, yescallback: onYes,
			no : no ,  nocallback: onNo
		}

		this._inputrow.style.display = "none";
		this.display(header,text, null, promptcallback, false);
	},

	input: function(header, callback){
		this._text.style.display = "none";
		this._text.value = "";

		var that = this;

		that.display(header, "", null, null, callback);
		/*function(val){
			console.log(val);
			callback(val.innerHTML);
//			messProps._aftercallbacks();
		});*/
	},

	/* do not use
	inputMulti: function(header, input_html, submit_callback){
		// input_array : [label,input obj]
		this._text.style.display = "none";
		this._text.value = "";

		this._buttonrow._old_html = this._buttonrow.innerHTML;
		this._buttonrow.innerHTML = input_html;

		var that = this;

		that.display(header, "", 
			function exit(){
				//restore
				that._buttonrow.innerHTML = that._buttonrow._old_html
				delete that._buttonrow._old_html;
			}, null, submit_callback
		);
	}*/

}


var statusProps = {
	_box: document.getElementById('status_props'),
	_header: document.getElementById('status_head'),
	_message: document.getElementById('status_text'),

	hide: function(){ 
		this._box.style.display = "none";
	},
	show: function(){ 
		this._box.style.display = "block";
		this._box.style.opacity = 1;
		this._box.style.zIndex = 503;
	},

	_fade: function(step=30){
		var op = 1;
		var timer = setInterval(function(){
			if (op < 0.1){
				clearInterval(timer);
				statusProps.hide();
			}
			statusProps._box.style.opacity = op;
			op -= 0.1;
		}, step)
	},

	display: function(header,details, timeUntilFade=1.5, fadeStep=50){
		// Don't change to "this", because utility.notify defers what 'this' is
		statusProps.show();

		statusProps._header.innerHTML = header;
		statusProps._message.innerHTML = details;

		setTimeout( function(){
			statusProps._fade(fadeStep);
		}, timeUntilFade * 1000);
	}
}



var utility = {
	_bg: document.getElementById('modal_bg'),

	focus: function(){
		this.focus();
	},

	yesnoprompt: function(title, message, yes, onYes, no, onNo){
		// Own method drop in?
		messProps.prompt(title, message, yes, onYes, no, onNo);
	},

	inputprompt: function(title, callback){
		messProps.input(title, callback);
	},

	notify: statusProps.display,

	getMouseXY: function(){
		return stage.getPointerPosition();
	},

	showBG: function(callback = null)
	{
		utility._bg.style.display = "block";

		// This property is not updated until later, so showBG
		// MUST be called AFTER the messProps._box is set to visible.
		var messZ = messProps._box.style.zIndex;
		utility._bg.style.zIndex = messZ; /// get Zindex of messPrompt solid

		if (callback !== null){
			utility._bg.onclick = function(){
				callback();
				utility.hideBG();
				utility._bg.onclick = null;
			}
		}
	},

	hideBG: function(){
		this._bg.style.display = "none";
		this._bg.style.zIndex = -99;
	}
}

var famProps = {
	_box : document.getElementById('family_props'),
	_id : document.getElementById('family_id'),
	_name : document.getElementById('family_name'),
	_submit: document.getElementById('family_submit'),

	hide: function(){ 
		Keyboard.unpause()
		famProps._box.style.display = "none";
		famProps._box.style.zIndex = -2;
	},
	show: function(){
		Keyboard.pause()
		famProps._box.style.display = "block";
		famProps._box.style.zIndex = 502;
		famProps._name.focus();
	},

	showProps: function(family){
		famProps.show();

		utility.showBG(function(){
			famProps.hide();
		});

		famProps._id.value   = family.id;
		famProps._name.value = family.name;
	},

	getProps: function(){
		var fam = {id:-1, name:""};

		fam.id = Number( famProps._id.value );
		fam.name = famProps._name.value;

		utility.hideBG();
		famProps.hide();
		return fam;
	},

	display: function(family, callback){
		famProps.showProps(family);
		famProps._submit.onclick = function(){
			var fam = famProps.getProps();
			callback(fam);
		}
	}

}


var benchProps = {
	_box :              document.getElementById('bench_props'),
	_rootfounderInput : document.getElementById('bench_root_founder'),
	_maxgenInput:       document.getElementById('bench_max_gen'),
	_allelesizeInput:   document.getElementById('bench_allele_size'),
	_inbreedInput:      document.getElementById('bench_inbreed_prob'),
	_exportInput:       document.getElementById('bench_export_haplo'),
	_submit:            document.getElementById('bench_submit'),
	_close:             document.getElementById('bench_close'),

	maxgen: -1,
	allelesize: -1,
	rootfounders: -1,
	inbreedchance: -1,
	exportFile: false,

	hide: function(){ 
		Keyboard.unpause()
		this._box.style.display = "none";
		this._box.style.zIndex = -99;
		utility.hideBG()
	},
	show: function(){
		Keyboard.pause()
		this._box.style.display = "block";
		this._box.style.zIndex = 501;
		this._rootfounderInput.focus();
		utility.showBG()
	},

	_getInputs: function(){
		this.maxgen        = Number( this._maxgenInput.value );
		this.allelesize    = Number(this._allelesizeInput.value );
		this.rootfounders  = Number(this._rootfounderInput.value );
		this.inbreedchance = Number(this._inbreedInput.value);
		this.exportFile    = this._exportInput.checked;
	},

	display: function(callback){
		this.show();

		var that = this;

		if (this._submit.onclick === null){
			this._submit.onclick = function()
			{
				that._getInputs();
				that.hide();
				callback(
					that.rootfounders,
					that.maxgen,
					that.allelesize,
					that.inbreedchance,
					that.exportFile)
			}
		}

		if (this._close.onclick === null){
			this._close.onclick = function(){
				that.hide();
			}
		}
	}
}


var persProps = {
	_box : document.getElementById('person_props'),	
	_genderInput : document.getElementById('pers_gender'),
	_genderUnknown: document.getElementById('pers_gender_unknown'),
	_affectInput : document.getElementById('pers_affect'),
	_affectUnknown : document.getElementById('pers_affect_unknown'),
	_submit : document.getElementById('pers_submit'),
	_delete : document.getElementById('pers_delete'),

	id : document.getElementById('pers_id'),
	name : document.getElementById('pers_name'),
	gender : -1,
	affect: -1,
	
	_getGender: function(){
		if (!(this._genderUnknown.checked)){
			return 0;
		}
		else { //Box checked, Male or Female
			return (this._genderInput.checked)?2:1;
		}
	},

	_setGender: function(gender){
		if (gender === 0 ){
			this._genderUnknown.checked = false;
		}
		else {
			this._genderUnknown.checked = true;
			this._genderInput.checked = (gender===2);
		}
	},

	_getAffect: function(){
		if (!(this._affectUnknown.checked)){
			return 0;
		}
		else { //Box checked, Unaffected or Affected
			return (this._affectInput.checked)?2:1;
		}
	},

	_setAffect: function(affect){
		if (affect === 0 ){
			this._affectUnknown.checked = false;
		}
		else {
			this._affectUnknown.checked = true;
			this._affectInput.checked = (affect===2);
		}
	},


	hide: function(){ 
		Keyboard.unpause()
		this._box.style.display = "none";
		this._box.style.zIndex = -99;
	},
	show: function(){
		Keyboard.pause()
		this._box.style.display = "block";
		this._box.style.zIndex = 501;
		this.name.focus();
	},

	showProps: function(person){
		this.show();

		utility.showBG(function(){
			persProps.hide();
		});

		this.id.value     = person.id;
		this.name.value   = person.name || "";
		this._setGender(person.gender);
		this._setAffect(person.affected);
	},

	getProps: function(){
		var person = {id:-1,gender:-1,affected:-1, name:""};

		person.id = Number(this.id.value);
		person.gender = this._getGender();
		person.affected = this._getAffect();
		person.name = this.name.value;

		this.hide();
		utility.hideBG();

		var perc = new Person(person.id, person.gender, person.affected, 0, 0);
		if (person.name.trim().length > 0){
			perc.name = person.name.trim();
		}
		return perc;
	},

	display: function(person, callback){
		this.showProps(person);
		this._submit.onclick = function(){
			var pers = persProps.getProps();
			callback(pers);
		};

		this._delete.onclick = function(){
			utility.yesnoprompt(
				"Delete",
				"Remove individual " + person.id,
				"Yes", function(){
					// Migrate this to personDraw.js
					var famid = familyDraw.active_fam_group.id;

					delete personDraw.used_ids[person.id]
					uniqueGraphOps.deleteNode(person.id, famid);

					familyMapOps.removePerc(person.id, famid);

					main_layer.draw();
					
					messProps.hide();
					persProps.hide();
					utility.hideBG();

					utility.notify("Family" + famid, "deleted individual "+ person.id);
				},
				"No", function(){
					messProps.hide();
					utility.hideBG();
				}
			);
		};
	}
}


// UI configurable:
var userOpts = {
	showTooltips: true,
	fancyGraphics: true,

	update: function(key, value){

		if (key in userOpts){
			userOpts[key] = value;
		}
		localStorage.setItem("userOpts."+key, value)
	},

	retrieve: function(key){
		if (key in userOpts){
			var value = localStorage.getItem("userOpts."+key);

			var res = false

			// default enable everything
			if (value === null){res = true;}
			res = (value === "true");
			
			// Set
			userOpts[key] = res;

			return res;
		}
		throw new Error(key+" not in userOpts");
	},

	setGraphics: function(){

		if (userOpts.fancyGraphics)
		{
			HaploBlockFormat.applyFancy();
			BackgroundVidMain.addVid();
		} 
		else {
			HaploBlockFormat.applyDefault();
			BackgroundVidMain.removeVid();
		}

		if (uniqueGraphOps.haplo_scroll !== null){
			HaploBlock.redrawHaplos();
		}
	}
};

var Settings = {

	__img : document.getElementById('settings_wheel'),
	__div : document.getElementById('settings_box'),

	__set: false,

	__storageoverridekey: "overridewindow", 
	__storagebindingskey: "bindings",

	init(){ // called by window load
		if (Settings.__set){
			return 0
		}

		// Set buttons
		Settings.__set = true;
		Settings.__img.onclick = Settings.__showSettings;

		// Make default bindings
		for (let group in Settings.bindings)
		{
			Settings.__defaults[group] = {};

			for (let key in Settings.bindings[group]){
				let value = Settings.bindings[group][key]
				Settings.__defaults[group][key] = value;
			}
		}
	},


	__showSettings(){
		console.groupCollapsed("Settings:");
		utility.showBG();
		Settings.readBindingsFromLocal();
		Settings.__updateTables();
		Settings.__div.style.display = "block";
	},

	__hideSettings(){
		utility.hideBG();
		Settings.__destroyTables();
		Settings.__div.style.display = "none";
		console.groupEnd();
		userTutorials.run();
	},

	bindings : {
		"global" : {
			"Toggle All" : 'A',
			"Toggle Affecteds" : 'F',
			"Submit" : 'Enter',
			"Marker Search" : "M",
			"Save" : 'Ctrl+S',
			"Exit Mode"    : "Escape",
		},

		"comparison" : {
			"Compare Genotypes" : 'G',
			"Prev. Recomb."  : '[',
			"Next  Recomb."  : ']',
			"Align Pedigree" : 'V',
			"Recolour Haploblocks" : 'R'
		},

		"haploview" : {
			"Start Analysis" : 'Enter',
			"Modify Pedigree": 'Ctrl+M'
		},

		"pedcreate" : {
			"Add Individual" : 'I',
			"Add Family" : 'F',
			"Mate-Mate" : 'M',
			"Parent-Offspring" : 'P',
			"Export" :  'Ctrl+E'
		}
	},
	__defaults : {}, // populated as bindingsChange

	__width_mod : 8 / 10,

	changeBinding(){
		let that = this;

		that.value = "[Type Now]";
		that.style.width = '6em';

		Keyboard.setCombo(function(keycombo){
			that.value = keycombo;
			that.style.width = (Settings.__width_mod * keycombo.length) + 'em';

			let group_key = that.id.split(':');
			Settings.bindings[group_key[0]][group_key[1]] = keycombo;
		});
	},

	__destroyTables(){
		let parent = Settings.__div;

		while (parent.firstChild) {
    		parent.removeChild(parent.firstChild);
		}
	},



	__setDefaultBindings(){
		for (let group in Settings.__defaults){
			Settings.bindings[group] = {};

			for (let key in Settings.__defaults[group]){
				let value = Settings.__defaults[group][key]
				Settings.bindings[group][key] = value;
			}
		}
	},

	setDefaultBindings(){
		Settings.__setDefaultBindings();
		Settings.__updateTables();
	},

	saveBindings(){
		Settings.saveBindingstoLocal();
		Settings.__hideSettings();
	},


	saveBindingstoLocal(){
		localStorage.setItem(Settings.__storagebindingskey, JSON.stringify(Settings.bindings))
		localStorage.setItem(Settings.__storageoverridekey, Keyboard.overridewindowdefaults);
	},

	readBindingsFromLocal(){
		let bind = localStorage.getItem(Settings.__storagebindingskey);
		if (bind === null){
			console.log("no local settings found, setting defaults");
			Settings.setDefaultBindings();
		}
		else {
			Settings.bindings = JSON.parse(bind);
			console.log("reading from local");
		}

		Keyboard.overridewindowdefaults = JSON.parse(localStorage.getItem(Settings.__storageoverridekey) || false);
	},

	__updateTables(){
		Settings.__destroyTables();
		Settings.__makeTables();
	},

	__makeTables(){
		let div = Settings.__div;

		let uu = document.createElement('ul')

		for (let group in Settings.bindings)
		{
			let childdiv = document.createElement('li');

			// Head
			let hh = document.createElement('h5');

			let groupname = (group === "global")?"haploview + comparison":group;

			hh.innerHTML = groupname + " bindings";

			childdiv.appendChild(hh);

		    // Body
		    let ul = document.createElement('ul');

    		for (let key in Settings.bindings[group]){
    			let combo = Settings.bindings[group][key];

    			let lli = document.createElement('li'),
    				uul = document.createElement('ul');

    			let li1 = document.createElement('li'),
    				li2 = document.createElement('li');

    			let inp = document.createElement('input');
    			inp.type = 'text'
    			inp.value = combo;
    			inp.style.width = (Settings.__width_mod * inp.value.length) + 'em';
    			inp.id = group + ':' + key; // for quick access later

    			li1.innerHTML = key;

    			li2.appendChild(inp);
    			uul.appendChild(li1);
    			uul.appendChild(li2);
    			
    			uul.onclick = Settings.changeBinding.bind(inp);
    			
    			lli.appendChild(uul);

//    			lli.appendChild(document.createElement('br'));

    			ul.appendChild(lli);
    		}
		    childdiv.appendChild(ul);
		    uu.appendChild(childdiv);
		}
		//Buttons
		uu.appendChild( Settings.__makeSaveRestoreButtons());
		div.appendChild(uu);

		// Tick box
		div.appendChild( Settings.__makeOverrideTickBox() );
		div.appendChild( Settings.__makeFirstRunTickBox() );
		div.appendChild( Settings.__makeClearSavedButton());
	},

	__makeClearSavedButton(){
		//Button to clear all saved data
		let unew = document.createElement('ul'),
			linew = document.createElement('li'),
			input = document.createElement('input');

		input.value = "Clear Saved Data";
		input.type = "button"

		input.onclick = function(){
			utility.yesnoprompt("Clear Data", "Delete all haplotype and pedigree cached data?",
			"yes",
			function(){
				clearLocalHaploStorage()  // -> formats.js
				MainPageHandler.defaultload()				
			},
			"no",
			function(){});
		}

		linew.appendChild(input);
		 unew.appendChild(linew);

		return unew;
	},


	__makeFirstRunTickBox(){
		//Tick box to enable tutorials
		let unew = document.createElement('ul'),
			linew = document.createElement('li'),
			input = document.createElement('input'),
			label = document.createElement('label');

		label.innerHTML = "Enable Tutorial";
		input.type = "checkbox"

		// set by readBindingsFromLocal()
		input.checked = userTutorials.isFirstRun();

		input.onchange = function(){
			userTutorials.setFirstRun( this.checked );
		}
		
		label.appendChild(input);
		linew.appendChild(label);
		 unew.appendChild(linew);

		return unew;
	},

	__makeOverrideTickBox(){
		//Add tickbox for overriding window activities
		let unew = document.createElement('ul'),
			linew = document.createElement('li'),
			input = document.createElement('input'),
			label = document.createElement('label');

		label.innerHTML = "Override Window Bindings";
		input.type = "checkbox"

		// set by readBindingsFromLocal()
		input.checked = Keyboard.overridewindowdefaults;

		input.onchange = function(){
			Keyboard.overridewindowdefaults = this.checked;
		}
		
		label.appendChild(input);
		linew.appendChild(label);
		 unew.appendChild(linew);

		return unew;
	},

	__makeSaveRestoreButtons(){
		let dli0 = document.createElement('li'),
			dul0 = document.createElement('ul'),
			dli2a = document.createElement('li'),
			dli2b = document.createElement('li');


		let save = document.createElement('button');
		save.innerHTML = "Save";
		save.onclick = Settings.saveBindings;
		dli2a.appendChild(save);

		let restore = document.createElement('button')
		restore.innerHTML = "Restore Defaults";
		restore.onclick = Settings.setDefaultBindings;
		dli2b.appendChild(restore);

		dul0.className = 'buttons_inline'
		dul0.appendChild(dli2a);
		dul0.appendChild(dli2b);

		dli0.appendChild(dul0);

		return dli0;
	}

}

var BackgroundVidMain = {

	__source : "public_assets/videos/background_general.lesser2.webm",
	__id : "bgvid",
	__lasttime : 0,
	__instance : null,

	__makeVid(){
		var vid = document.createElement('video'),
			src = document.createElement('source');

		vid.currentTime  = BackgroundVidMain.__lasttime;
		src.src          = BackgroundVidMain.__source;
		vid.id           = BackgroundVidMain.__id;
		vid.loop         = true;
		vid.autoplay     = true;
		vid.playbackRate = 0.7;

		vid.appendChild(src);
		return vid;
	},

	addVid(){
		// Only works on MainPage, does nothing otherwise
		if (MainPageHandler._currentMode === MainPageHandler.modes.main 
			&& userOpts.fancyGraphics
			&& BackgroundVidMain.__instance === null
			&& TutorialActions.getNumTutorials() == 0)
		{
			var vid = (BackgroundVidMain.__instance = BackgroundVidMain.__makeVid());
			document.body.appendChild(vid);
		}
	},

	removeVid(){
		var vid = BackgroundVidMain.__instance;

		if (vid !== null){
			vid.parentNode.removeChild(vid);
			BackgroundVidMain.__instance = null;
			BackgroundVidMain.__lasttime = vid.currentTime;
		}
	}
}



var MainPageHandler = {

	_currentMode : null,

	// enum..
	modes : {
		main : 0,
		haploview: 1,
		pedcreate: 2,
	},


	__mainpage_divgroups : {
		"main"  	: document.getElementById('maincircle'),
		"ToolButtons"	: document.getElementById('selection_tools'),
		"BottomButtons" : document.getElementById('save_and_close'),
		"container"	: document.getElementById('container'),
		"pedexist"  : document.getElementById('pedresume_label'),
		"hapexist"  : document.getElementById('haploresume_label')
	},

	__bgDefault(){
		document.body.style.backgroundColor = "#cdcdcd";
	},

	__bgWhite(){
		document.body.style.backgroundColor = "rgb( 250, 246, 242)"; // derived by trial and error...
	},

	div_groups: function(key){
		return MainPageHandler.__mainpage_divgroups[key];
	},

	showDiv: function(key, bool){
		MainPageHandler.div_groups(key).style.display = bool?"":"none";
	},

	setPrevExistingButtons: function(){
		MainPageHandler.showDiv("pedexist",
			(localStorage.getItem(localStor.ped_save) !== null)
		);
		
		MainPageHandler.showDiv("hapexist", 
			(localStorage.getItem(localStor.hap_save) !== null)
		);
	},

	defaultload: function(){
		
		init.clearMaps();

		MainPageHandler._currentMode = MainPageHandler.modes.main
		BackgroundVidMain.addVid(); /* Must come after above */

		userTutorials.run();

		fileSelector.end();

		/** Show main page, hide rest **/
		MainPageHandler.__bgDefault();

		MainPageHandler.showDiv("main", true);
		MainPageHandler.showDiv("container", false);

		MainPageHandler.showDiv("BottomButtons", false);
		MainPageHandler.showDiv("ToolButtons", false);

		MainPageHandler.setPrevExistingButtons();

	},

	haplomodeload: function(){

		MainPageHandler._currentMode = MainPageHandler.modes.haploview
		BackgroundVidMain.removeVid();

		fileSelector.end();

		/** Show haplotypes, after file (up)load **/
		MainPageHandler.__bgWhite();
		MainPageHandler.showDiv("main", false);
		MainPageHandler.showDiv("container", true);
		MainPageHandler.showDiv("ToolButtons", true);
		MainPageHandler.showDiv("BottomButtons", true);
		
		ButtonModes.setToHaploView();
	},

	createpedmode: function(){
		
		MainPageHandler._currentMode = MainPageHandler.modes.pedcreate
		BackgroundVidMain.removeVid();

		fileSelector.end();
		personDraw.used_ids = {};

		/** Show haplotypes, after file (up)load **/
		MainPageHandler.showDiv("main", false);
		
		MainPageHandler.showDiv("container", true);

		MainPageHandler.showDiv("ToolButtons", true);
		MainPageHandler.showDiv("BottomButtons", true);
		
		ButtonModes.setToPedCreate();
	}
}


var MainButtonActions  = {

	_temphaploload: null,

	preamble: function(){
		makeStage();
		init.clearMaps();
	},

	fileUpload: fileSelector.init,

	loadHaploFromStorage: function(hap_data = null)
	{
		FileFormat.__begFuncs();
		
		if (hap_data === null){
			hap_data = localStorage.getItem( localStor.hap_save );			
		}

		// Still empty?
		if (hap_data === null){
			console.log("No haplo data saved");
			MainButtonActions.exitToMenu();
			return
		}

		SerialParse.All.import( hap_data );
		HaploPedProps.init();
		
		FileFormat.__endFuncs(null);  // :=null  ensures that HGroups aren't reassigned.
	},


	loadPedFromStorage: function(haplotransfer = false) {
		MainButtonActions.preamble();
		MainPageHandler.createpedmode();
		
		var ped_data, ped_type;

		if (!haplotransfer){
			ped_data = localStorage.getItem( localStor.ped_save );
			Pedfile.import(ped_data);
		} else {
			ped_data = localStorage.getItem( localStor.transfer );
			//Do.Something.Else();
		}

		init.pedcreate();
	},

	savePedToStorage: function() {

		var ped_to_string = Pedfile.export(true); 
		/*always store graphics for local, only export has no graphics option*/

		localStorage.setItem( localStor.ped_save, ped_to_string );
		localStorage.setItem( localStor.ped_type, localStor.ped_type);

		utility.notify("Pedigree Saved","...");
	},

	saveHaploToStorage: function(){
		//Save to local storage
		localStorage.setItem(localStor.hap_save, SerialParse.All.export() )
		utility.notify("Haplo File Saved","...");		
	},

	exitToMenu: function(){

		if (ModeTracker.currentMode === ModeTracker.modes.pedcreate){
			var changeDetected = Pedfile.pedigreeChanged();

			if (changeDetected){
				utility.yesnoprompt("Pedigree Modified", "Save changes before exit?",
					"Yes", function(){
			 			MainButtonActions.savePedToStorage();
			 			MainPageHandler.defaultload();
			 		},
			 		"No", function(){
			 			MainPageHandler.defaultload();	
				 	}
				 );
			}
			else{
				MainPageHandler.defaultload();
			}
		}
		// Haplo Types are automatically saved and loaded
		else{
			MainPageHandler.defaultload();
		}
	},


	createNewPed: function() {
		MainButtonActions.preamble();
		MainPageHandler.createpedmode();

/*		var d = document.getElementById('pedcreate_views');
		d.style.position = "absolute";
		d.style.zIndex = 122;
		d.style.display = "";*/
	}
}

var CSSMarkerRange = {

	_submit : document.getElementById('index_submit'),
	_min : document.getElementById('marker_list_min'),
	_max : document.getElementById('marker_list_max'),
	_min_input : document.getElementById('marker_min'),
	_max_input : document.getElementById('marker_max'),

	_initialised: false,
	_visible: false,

	init(){
		CSSMarkerRange._visible?CSSMarkerRange.__hideIndexCSS():CSSMarkerRange.__showIndexCSS();

		if (CSSMarkerRange._initialised){
			return 0;
		}

		CSSMarkerRange._min_input.onchange = CSSMarkerRange.updateMaxIndexDataList;
		CSSMarkerRange._submit.onclick = CSSMarkerRange.submitIndexRange;		
		CSSMarkerRange.__populateIndexDataList();
	},

	//One off
	__populateIndexDataList(){
		var inner_options = "";
		
		for (var m=0; m < MarkerData.rs_array.length; m++){
			inner_options += '<option value="' + MarkerData.rs_array[m] + '" />';
		}

		CSSMarkerRange._min.innerHTML = inner_options;
	},

	// Repeated
	updateMaxIndexDataList()
	{
		var min_index = MarkerData.rs_array.indexOf( CSSMarkerRange._min_input.value );

		var inner_options = "";

		for (var m=min_index; m < MarkerData.rs_array.length; m++){
			inner_options += '<option value="' + MarkerData.rs_array[m] + '" />';
		}
		CSSMarkerRange._max.innerHTML = inner_options;
	},

	__showIndexCSS(){
		Keyboard.layerOn("indexCSS");

		Keyboard.addKeyPressTask("Enter", function(){
			if (CSSMarkerRange._max_input.value.length < 4){
				CSSMarkerRange._max_input.focus();
			}
			else {
				CSSMarkerRange.submitIndexRange();
			}
		});


		CSSMarkerRange._visible = true;
		document.getElementById('index_class').style.display = "block"
		CSSMarkerRange._min_input.focus()
	},

	__hideIndexCSS(){
		Keyboard.layerOff();

		CSSMarkerRange._visible = false;
		document.getElementById('index_class').style.display = "none"
	},


	submitIndexRange(){
		var min_range_value = CSSMarkerRange._min_input.value,
			max_range_value = CSSMarkerRange._max_input.value;

		var min_range = MarkerData.rs_array.indexOf( min_range_value ),
			max_range = MarkerData.rs_array.indexOf( max_range_value );

		if ((min_range === -1) || (max_range === -1) ){
			console.log("invalid range");
			return 0;
		}


		if (min_range > max_range){
			console.log("min must be greater than max");
			return 0;
		}

		HaploBlock.sta_index = min_range;
		HaploBlock.end_index = max_range;

		Resize.updateHaploScrollHeight( max_range - min_range );

		HaploBlock.redrawHaplos(true);

		CSSMarkerRange.hideIndexCSS();
	}
}
/* Class that rewrites the selection_tools div to swap in tools for each mode */
var BottomButtons = {

	table_keys : {}, 
	div   : document.getElementById("save_and_close"),
	table : document.getElementById("save_and_close_table"),


	addToolsButton: function(message, shortcut, text, callback)
	{
		BottomButtons.__addToToolsContainer(
			ButtonModes.makeToolsButton("general", message, shortcut+'|'+text, callback)
		);
	},


	__addToToolsContainer: function(button)
	{
		BottomButtons.table_keys[button.innerHTML] = button;

		var row = BottomButtons.table.insertRow(),
			cell = row.insertCell();

		cell.appendChild(button);
	},

	__removeFromToolsContainer: function(key)
	{
		var button = BottomButtons.table_keys[key],
			cell = button.parentNode,
			row  = cell.parentNode,
			rowInd = row.rowIndex;

		row.deleteCell(0);
		BottomButtons.table.deleteRow(rowInd);

		delete BottomButtons.table_keys[key];
	},


	/* Switching modes */
	modes: {

		__clearMode: function(){
			for (var k in BottomButtons.table_keys){
				BottomButtons.__removeFromToolsContainer(k);
			}
			BottomButtons.div.style.display = "none";
		},

		__preamble: function(){
			BottomButtons.modes.__clearMode();
			BottomButtons.div.style.display = "block";
		},


		/* Pedigree Creation View */
		setToPedCreate: function()
		{
			BottomButtons.modes.__preamble();

			BottomButtons.addToolsButton("Save", 
				Settings.bindings.global["Save"],
				"Saves current pedigree to be automatically loaded next time", 
				MainButtonActions.savePedToStorage);

			BottomButtons.addToolsButton("Export", 
				Settings.bindings.pedcreate["Export"],
				"Exports pedigree in LINKAGE format with or without graphics positions saved",
				function(){
					utility.yesnoprompt("Export", "Strip graphics tags?", 
						"Yes", function(){
							Pedfile.exportToTab(false);
						},
						"No", function(){
							Pedfile.exportToTab(true);
						}
					);
				}
			);

			BottomButtons.addToolsButton("Exit", 
				Settings.bindings.global["Exit Mode"],
				"Exits to Main Menu", function(){
				MainButtonActions.exitToMenu();
			});

			ModeTracker.setMode( "pedcreate" );
		},

		/* HaploView */
		setToHaploView: function(){
			BottomButtons.modes.__preamble();

			BottomButtons.addToolsButton("Save", 
				Settings.bindings.global["Save"],
				"Save current analysis data to be automatically loaded next time",
				MainButtonActions.saveHaploToStorage);
			
			BottomButtons.addToolsButton("Exit", 
				Settings.bindings.global["Exit Mode"],
				"Exits to Main Menu",
				MainButtonActions.exitToMenu);

			ModeTracker.setMode( "haploview" );
		},

		/* Selection View */
		setToSelectionMode: function(){
			BottomButtons.modes.__clearMode();
			ModeTracker.setMode( "selection" );
		},

		/* Side by side Haploblocks */
		setToComparisonMode: function(){
			BottomButtons.modes.__preamble();

			BottomButtons.addToolsButton("Align Pedigree",
				Settings.bindings.comparison["Align Pedigree"],
				"Shifts individuals vertically to be at the same position, or offset by generation", function(){
				HaploWindow.alignTopSelection( DOS.haplo_group_nodes, DOS.haplo_group_lines);
			});

			BottomButtons.addToolsButton("Recolour",
				Settings.bindings.comparison["Recolour Haploblocks"],
				"Random colour assignment to haplo blocks. Founder groups are preserved.", function(){
				FounderColor.makeUniqueColors(true); //random = true
				HaploBlock.redrawHaplos(false);
			});

//			BottomButtons.modes.__clearMode();
			ModeTracker.setMode( "comparison" );
		},


		/* From comparison mode, the buttons showed during homology selection */
		setToHomologySelection: function()
		{
			BottomButtons.modes.__clearMode();
			ModeTracker.setMode( "homselection" );
		},

		/* Align, Find Hom, Range, Marker */
		setToHomologyMode: function()
		{
			BottomButtons.modes.__clearMode();
			ModeTracker.setMode( "homology" );
		}
	}
}




/* Class that rewrites the selection_tools div to swap in tools for each mode */
var ToolButtons = {

	table_keys : {}, 
	div   : document.getElementById("selection_tools"),
	table : document.getElementById("selection_table"),
	title : document.getElementById("selection_title"),

	setWidth: function(px){
		ToolButtons.div.style.width = px + 'px';
	},

	setTitle: function(title){
		ToolButtons.title.innerHTML = title;
	},

	__addToToolsContainer: function(toolbutton)
	{
		ToolButtons.table_keys[toolbutton.innerHTML] = toolbutton;

		var row = ToolButtons.table.insertRow(),
			cell = row.insertCell();

		cell.appendChild(toolbutton);
	},


	addToolsToggleButton(message, shortcut, text, callback){
		ToolButtons.__addToToolsContainer(
			ButtonModes.makeToolsToggleButton("sidetool", message, shortcut + '|' + text, callback)
		);
	},

	addToolsButton: function(message, shortcut, text, callback)
	{
		ToolButtons.__addToToolsContainer(
			ButtonModes.makeToolsButton("sidetool", message, shortcut + '|' + text, callback)
		);
	},

	__removeFromToolsContainer: function(key)
	{
		var button = ToolButtons.table_keys[key],
			cell = button.parentNode,
			row  = cell.parentNode,
			rowInd = row.rowIndex;

		row.deleteCell(0);
		ToolButtons.table.deleteRow(rowInd);

		delete ToolButtons.table_keys[key];
	},


	/* Switching modes */
	modes: {

		clearMode: function(){

			for (var k in ToolButtons.table_keys){
				ToolButtons.__removeFromToolsContainer(k);
			}
			ButtonModes.removeKeyboardShortcuts("sidetool");

			ToolButtons.setTitle("");
			ToolButtons.div.style.display = "none";
		},

		preamble: function(){
			ToolButtons.modes.clearMode();
			ToolButtons.div.style.display = "block";
		},

		/* Pedigree Creation View */
		setToPedCreate: function()
		{
			ToolButtons.modes.preamble();

			ToolButtons.setTitle("Ped Tools");
	
			ToolButtons.addToolsButton("Add Individual", 
				Settings.bindings.pedcreate["Add Individual"],
				"Adds an individual to the active family, which can then be modified by double-clicking on it", 
				function(){personDraw.addNode();});
	
			ToolButtons.addToolsButton("Add Family", 
				Settings.bindings.pedcreate["Add Family"],
				"Adds a new family to the screen",
				function(){familyDraw.addFam();});
	
			ToolButtons.addToolsButton("Mate-Mate", 
				Settings.bindings.pedcreate["Mate-Mate"],
				"Draws a line between two individuals who will acts as parents.", 
				function(){
				(new MatelineDraw(familyDraw.active_fam_group.id)).init();
			});
	
			ToolButtons.addToolsButton("Parent-Offspring", 
				Settings.bindings.pedcreate["Parent-Offspring"],
				"Draws a line between an individual and a couple who will be their parents",
				function(){
				(new OffspringDraw(familyDraw.active_fam_group.id)).init();
			});
		},


		/* Haplo View */
		setToHaploView: function()
		{
			ToolButtons.modes.preamble();

			//ToolButtons.setWidth(90);
			ToolButtons.setTitle("Pedigree");

			ToolButtons.addToolsButton("Start Analysis", 
				Settings.bindings.haploview["Start Analysis"],
				"Begins the selection process",
				SelectionMode.init);

			ToolButtons.addToolsButton("Modify Pedigree",
				Settings.bindings.haploview["Modify Pedigree"],
				"[NOT YET IMPLEMENTED]Modifies the current pedigree",
				
				function(){
					localStorage.setItem(localStor.transfer, MainButtonActions._temphaploload);
					utility.notify("transferring","...");

					MainButtonActions.loadPedFromStorage(true);
				}
			);
		},

		/* Selection Editting View */
		setToSelectionMode: function()
		{
			ToolButtons.modes.preamble();

			ToolButtons.setTitle("Selection");
	
			ToolButtons.addToolsButton("Toggle All", 
				Settings.bindings.global["Toggle All"],
				"Selects all individuals from all families",
				SelectionAction.selectAll);
	
			ToolButtons.addToolsButton("Toggle Affecteds", 
				Settings.bindings.global["Toggle Affecteds"],
				"Selects all affected individuals from all families",
				SelectionAction.selectAffecteds);
	
			ToolButtons.addToolsButton("Submit", 
				Settings.bindings.global["Submit"],
				"Submits selection for haplotype viewing",
				HaploWindow.init);

			ButtonModes.addKeyboardShortcut("sidetool", "Escape", SelectionMode.quit);
		},


		/* Aka Side-by-Side Haploblock mode: Align, Find Hom, Range, Marker */
		setToComparisonMode: function()
		{
			ToolButtons.modes.preamble();

			ToolButtons.setTitle("Haplotypes");

			ToolButtons.addToolsButton("Compare Genotypes", 
				Settings.bindings.comparison["Compare Genotypes"],
				"Begins selection process for genotype comparison mode",
				HomologySelectionMode.init);
	
			ToolButtons.addToolsToggleButton("Marker Search", 
				Settings.bindings.global["Marker Search"],
				"Toggles marker search window",
				CSSMarkerRange.init);
	
			ToolButtons.addToolsButton("Prev. Recomb.",
				Settings.bindings.comparison["Prev. Recomb."],
				"Shifts view up to previous recombination",
				HaploBlock.scrollToPrevRecomb);
	
			ToolButtons.addToolsButton("Next  Recomb.", 
				Settings.bindings.comparison["Next  Recomb."],
				"Shifts view down to next recombination",
				HaploBlock.scrollToNextRecomb);

			ButtonModes.addKeyboardShortcut("sidetool", "Escape", HaploWindow.destroy);
		},

		/* From comparison mode, the buttons showed during homology selection */
		// called by HomologySelectionMode.init
		setToHomologySelection: function(){
			ToolButtons.modes.preamble();

			ToolButtons.setTitle("GT Compare");
	
			ToolButtons.addToolsButton("Toggle All",
				Settings.bindings.global["Toggle All"],
				"Selects all individuals shown",
				SelectionAction.selectAll);
	
			ToolButtons.addToolsButton("Toggle Affecteds",
				Settings.bindings.global["Toggle Affecteds"],
				"Selects only affected individuals from shown",
				SelectionAction.selectAffecteds);
	
			ToolButtons.addToolsButton("Submit",
				Settings.bindings.global["Submit"],
				"Initiates genotypes comparison mode from those selected",
				HomologySelectionMode.submit);
			
			ButtonModes.addKeyboardShortcut("sidetool", "Escape", HomologySelectionMode.quit);
		},


		/* Actual tools used in homology plots */
		// called by HomologySelectionMode.submit()
		setToHomologyMode: function(){
			ToolButtons.modes.preamble();

			ToolButtons.setTitle("GT Compare");
	
			ToolButtons.addToolsToggleButton("Marker Search",
				Settings.bindings.global["Marker Search"],
				"Toggles marker search window",
				CSSMarkerRange.init);

			ButtonModes.addKeyboardShortcut("sidetool", "Escape", HomologyMode.quit);
		}
	}
}

/*Wrapper for selection tools and general button
  -- No need to call either directly 
*/

var ButtonModes = {

	__modespopulated: false,

	__validmodes: {
/*		"setToPedCreate": true,        	/* Pedigree Creation View */
/*		"setToHaploView": true,           /* HaploMode Visualization Mode */
		"setToSelectionMode": true, 	    /* Selection View */
		"setToComparisonMode": true,     	/* Side-by-Side Haploblock mode: Align, Find Hom, Range, Marker */
		"setToHomologySelection": true,   /* From comparison mode, the buttons showed during homology selection */
		"setToHomologyMode": true         /* Plot types */
	},

	__shortcuts : {},

	makeToolsToggleButton(from, message, shortcut_text, callback)
	{
		var splitter = shortcut_text.split('|'),
			shortcut = splitter[0],
			text = (" (  " + shortcut + "  ) " + splitter[1]) || (" (  " + shortcut + "  ) ");


		var button = ButtonModes.__makeButton(message, text);
			button.prevstate = null;

		function newcallback(){
//			console.log(button,"clicked");
			if (button.prevstate === null){
				button.prevstate = [button.style.background, button.style.color];
				button.style.background = 'black'
				button.style.color = 'white'
			}
			else {
				button.style.background = button.prevstate[0];
				button.style.color = button.prevstate[1];
				button.prevstate = null;
			}
			callback();
		}

		ButtonModes.addKeyboardShortcut( from, shortcut, button.onclick)
		button.onclick = newcallback.bind(button);

		return button;
	},

	makeToolsButton: function(from, message, shortcut_text, callback)
	{
		var splitter = shortcut_text.split('|'),
			shortcut = splitter[0],
			text = (" (  " + shortcut + "  ) " + splitter[1]) || (" (  " + shortcut + "  ) ");

		ButtonModes.addKeyboardShortcut( from , shortcut, callback)

		return ButtonModes.__makeButton(message, text, callback)
	},


	__makeButton: function(message, title_text, callback){
		var butt = document.createElement("button");

		butt.title = title_text;
		butt.innerHTML = message;
		butt.onclick = callback;

		return butt;
	},


	addKeyboardShortcut(caller, keycombo, func){
		// Key and modifier
		//console.log(keycombo)

		var alt_key = keycombo.split('+'),
			key = null,
			alt = null;

		if (alt_key.length == 2){
			alt = alt_key[0];
			key = alt_key[1];
			
			if (alt === "Ctrl"){
				alt = "Control"
			}
		}
		else {
			key = alt_key[0]
		}

		if (key.length === 1){
			key = key.toLowerCase();
		}

		if (!(caller in ButtonModes.__shortcuts)){
			ButtonModes.__shortcuts[caller] = {};
		}

		ButtonModes.__shortcuts[caller][key] = true;
		Keyboard.addKeyPressTask(key, func, alt);
	},

	removeKeyboardShortcuts(caller){
		for (var k in ButtonModes.__shortcuts[caller]){
			Keyboard.removeKeyPressTask(k);
		}
		ButtonModes.__shortcuts[caller] = {}; //reset
	},


	__switchMode: function(funcname){
		console.log("ButtonMode", funcname);

		ButtonModes.__preamble(funcname);

		BottomButtons.modes[funcname]();
		ToolButtons.modes[funcname]();

	},
	
	__preamble: function(nameOfMode){

		if (!ButtonModes.__modespopulated){
			for (var mode in ButtonModes.__validmodes)
			{
				ButtonModes[mode] = ButtonModes.__switchMode.bind(this, mode);
			}
			ButtonModes.__modespopulated = true
		}

		ButtonModes.removeKeyboardShortcuts("general");
		ButtonModes.removeKeyboardShortcuts("sidetool");
		Keyboard.layerOff();
		Keyboard.layerOn(nameOfMode);
	},

	/* Switch mode has to be called at least once, keep these functions here */
	setToPedCreate(){
		ButtonModes.__switchMode(arguments.callee.name)
	},

	setToHaploView(){
		ButtonModes.__switchMode(arguments.callee.name)
	},
}





class TutorialPage {

	constructor(object){

		// action is made up of enter and exit functions
		if (object.action === undefined){
			object.action = {enter: null, exit: null}
		}

		if (object.text !== undefined){
			this.__text_top  = object.text[0];
			this.__text_bot  = object.text[1];

		}

		// Text comes from video transcripts, so grab zero times
		if (object.type === "video"){
			var trans = object.media.text[0];

			this.__text_top = trans[1]
			this.__text_bot = trans[2]
		}

		this.__type      = object.type;
		this.__title     = object.title;
		this.__media     = object.media;
		this.__action    = object.action;
	}

	destroy(){ /* Called by Tutorial.destroy() */
		if (this.__videotrans !== undefined){
			this.__videotrans.destroy();
		}
		while (this.__mainpage.firstChild){
			this.__mainpage.removeChild(this.__mainpage.firstChild);
		}
		this.__mainpage.parentNode.removeChild(this.__mainpage);
	}

	__makePage(){

		var divmain = document.createElement('div'),
			h2      = document.createElement('h2') ,
			toptext = document.createElement('h6') ,   // top text
			bottext = document.createElement('h7') ;   // bottom caption

		this.text = {top: toptext, bot: bottext};    // outside accessor

		divmain.className = "tutorpage";
		divmain.appendChild(h2);

		h2.innerText      = this.__title;
		toptext.innerText = this.__text_top;

		var that = this;
		
		if (this.__text_bot!== null){
			bottext.innerText = this.__text_bot;
		}

		var textholder = document.createElement('div');
		textholder.className = "textholder";

		textholder.appendChild(toptext);
		textholder.appendChild(bottext);

		divmain.appendChild(textholder);

		if (this.__media !== undefined)
		{
			var med;	
			if (this.__type === "video")
			{
				var vt = new VideoTranscript(that, this.__media.src, this.__media.text);
				med = vt.getVideo();
//				divmain.appendChild(med);
//				divmain.appendChild(toptext);

				this.__videotrans = vt; // for destroy();

				// Layer on Keyboard
				if (this.__action.enter === null){
					this.__action.enter = vt.keyboardOn.bind(vt);
				}
				else {
					var enter = this.__action.enter;
					this.__action.enter = function(){
						vt.keyboardOn.bind(vt)();
						enter();
					}
				}

				//Layer off Keyboard
				if (this.__action.exit === null){
					this.__action.exit = vt.keyboardOff.bind(vt);
				}
				else {
					var exit = this.__action.exit;
					this.__action.exit = function(){
						vt.keyboardOff.bind(vt)()
						exit();
					}
				}
			}
			
			else { //"img"
				med = document.createElement('img');
				med.src = this.__mediasrc; 
//				divmain.appendChild(toptext);
//				divmain.appendChild(med);
			}
			divmain.appendChild(med);
		}



		// Accessors
		this.enterAction = this.__action.enter;
		this.exitAction  = this.__action.exit;

		return divmain;
	}

	getPage(){
		this.__mainpage = this.__makePage();
		return this.__mainpage;
	}

	__transitionText(obj, new_text, interval = 500){

		var step = interval / 6

		setTimeout(function(){
			obj.style.opacity = 0.7;

		setTimeout(function(){
			obj.style.opacity = 0.3

		setTimeout(function(){
			obj.style.opacity = 0
			obj.innerText = new_text;

		setTimeout(function(){
			obj.style.opacity = 0.3

		setTimeout(function(){
			obj.style.opacity = 0.7

		setTimeout(function(){
			obj.style.opacity = 1
		}, step)
		}, step)
		}, step)
		}, step)
		}, step)
		}, step)
	}

	// Used by VideoTranscript
	modifyTop(text){  this.__transitionText(this.text.top, text, 500);	}
	modifyBot(text){  this.__transitionText(this.text.bot, text, 500)   }
}



class TutorialActions {

	static getNumTutorials(){
		TutorialActions.__numTutorials = TutorialActions.__numTutorials || 0;
		return TutorialActions.__numTutorials;
	}

	static incrementNumTutorials(){
		TutorialActions.__numTutorials = (TutorialActions.__numTutorials || 0) + 1;
	}

	static decrementNumTutorials(){
		TutorialActions.__numTutorials--;
	}

	constructor( exitfunction ){
		this._onexit = exitfunction;
		this._currentpage = 0;

		TutorialActions.incrementNumTutorials();

		BackgroundVidMain.removeVid(); /*Ttorials stop other videos while running */

		Keyboard.layerOn("tutorial");
		Keyboard.addKeyPressTask("Backspace", this.backwardPage.bind(this));
		Keyboard.addKeyPressTask("Enter", this.forwardPage.bind(this));
		Keyboard.addKeyPressTask("Escape", this.quit.bind(this));
	}


	static __buttonVisibility(button, visible){
		button.style.display = visible?"block":"none";
		button.style.zIndex = visible?2:-1;
	}
	static __isButtonVisible(button){
		return button.style.display !== "none";
	}

	backwardVisible(vis){ TutorialActions.__buttonVisibility(this.back, vis);}
	forwardVisible(vis){  TutorialActions.__buttonVisibility(this.forw, vis);}
	
	quit(){
		Keyboard.layerOff();

		this.destroy();

		if (this._onexit !== null){
			this._onexit();
		}
		TutorialActions.decrementNumTutorials();
		BackgroundVidMain.addVid();
	}

	forwardPage(){
		if (!TutorialActions.__isButtonVisible(this.forw)){
			return 0; //not visible, do nothing
		}

		var len  = this._pages.length,
			next = this._currentpage + 1;

		this.forwardVisible(next !== len - 1) // If next page is last, hide forward
		this.backwardVisible(true);

		this._currentpage = next;
		this.__hidepage(this._currentpage - 1);
		this.__showpage(this._currentpage);
	}

	backwardPage(){
		if (!TutorialActions.__isButtonVisible(this.back)){
			return 0; //not visible, do nothing
		}


		var prev = this._currentpage - 1;

		this.backwardVisible(prev !== 0);
		this.forwardVisible(true) 

		this._currentpage = prev;
		this.__hidepage(this._currentpage + 1);
		this.__showpage(this._currentpage );
	}

	__hidepage(pageno){this.___setpage(pageno,false)};
	__showpage(pageno){this.___setpage(pageno,true)};

	__fadeTransition(obj, num_levels, start, interval, callback)
	{
		var op_step = 1 / num_levels,
			op_curr = start,
			op_mod  = (start === 0)?1:-1

		var wait_step = interval / num_levels

		function recur(obj, level, opacity, cb){
			console.log(level, opacity, obj)
			if (level === 0){
				cb();
				return 0
			}

			obj.style.opacity = opacity;

			setTimeout(function(){
				recur( obj, level - 1, opacity + (op_mod*op_step), cb )
			},
			wait_step);
		}

		recur(obj, num_levels, start, callback);			


	}


	___setpage(pageno, visible, interval=1000)
	{
		var page = this._pages[pageno],
			plot = this.__tps[pageno];

		if (page === undefined){
			console.log("Invalid page", pageno);
			return -1
		}

		var step = interval / 4;


		if (visible){
			setTimeout(function(){
				page.style.opacity = 1;
				console.log(plot);
				if (plot.enterAction !== null){plot.enterAction();}
				page.style.display = "block";
			
			}, TutorialActions.__wait_amount);
		}
		else {
			this.__fadeTransition(page, 4, 1, 200, function(){
				page.style.opacity = 0;
				if (plot.exitAction !== null){plot.exitAction();}
				
				page.style.display = "none";
			});
		}
		TutorialActions.__wait_amount = 200
	}
}

TutorialActions.__wait_amount = 0;


class Tutorial extends TutorialActions {

	constructor( page_array_of_details, exit_function = null ){
		super(exit_function);
		
		this.__tps = {}; // for destroy

		this._pages = [];
		this.main = this._makeTutorial( page_array_of_details );

		if (this._pages.length === 1){
			this.forwardVisible(false);
		}
		this.backwardVisible(false);
		this.__showpage(0);

	}

	destroy(){ /*Called by TutorialActions.quit() */
		for (var ppp in this.__tps){
			this.__tps[ppp].destroy();
		}
		this.main.parentNode.removeChild(this.main);

	}

	_makeTutorial( pages ) {
		var divparent = document.createElement('div');
		divparent.className = "tutor"

		// Make pages
		var pageholder = document.createElement('div');
		pageholder.className = "pages";

		divparent.appendChild(pageholder);

		for (var p=0; p < pages.length; p++)
		{
			var ppp     = new TutorialPage( pages[p] ),
				newpage = ppp.getPage();

			this.__tps[p] = ppp;

			newpage.style.display = "none"; // hide by default
			this._pages.push( newpage );
		
			pageholder.appendChild( newpage );
		}

		var buttons = this._makeButtons();


		divparent.appendChild(buttons);

		var superparent = document.createElement('div');
		superparent.appendChild(divparent);
		superparent.className = 'tutorcontainer'

		//BG
//		var bg = document.createElement('div');
//		bg.id = "tutorbg";
//		superparent.appendChild(bg);

		document.body.appendChild(superparent);

		return superparent;
	}

	_makeButtons(){
		//Forward, back, exit
		this.forw = document.createElement('div');
		this.back = document.createElement('div');
		this.exit = document.createElement('div');

		this.back.id = 'tutor_back';
		this.forw.id = 'tutor_forw';
		this.exit.id = 'tutor_exit';

		this.forw.onclick = this.forwardPage.bind(this);
		this.back.onclick = this.backwardPage.bind(this);
		this.exit.onclick = this.quit.bind(this);

		// Page no
		var pageno = document.createElement('p');
		pageno.id = "tutor_pageno";

		// Collate
		var buttons = document.createElement('div');
		buttons.className = "tutorbuttons"
		buttons.appendChild(this.forw);
		buttons.appendChild(this.back);
		buttons.appendChild(this.exit);
		buttons.appendChild(pageno);

		return buttons;
	}
}

class ButtonTutorial {

	constructor(button, 
				head, text,  
				direction, 
				onclick = null, 
				styleprops = null){

		console.assert(['top','bot','left','right'].indexOf(direction)!==-1, "not a valid direction" + direction);
		console.assert(button!==null,                             "button does not exit" );
		console.assert(button.children.length === 0,              "button already in use");

		//Directions: UDLR
		this.box = ButtonTutorial.__makePointy(direction, head, text);

		if (styleprops!==null){
			for (var prop in styleprops){
				this.box.style[prop] = styleprops[prop];
			}
		}

		// Shakey
		var vertical = ['top','bot'].indexOf(direction)!==-1;
		this.timer = ButtonTutorial.__shake(this.box, vertical);

		// Lock to element
		this.button = button;
		this.button.parentNode.appendChild(this.box);

		// Background that obscures all other clicks
		this.bg = document.createElement('div');
		this.bg.className = 'buttontutorial_bg';
		this.button.appendChild(this.bg);

		// Raise element until clicked (doesn't quite work)
		// __ondelete restores it
		this.prev_zindex = this.button.style.zIndex || 0;

		this.button.style.zIndex = 999;
		this.box.style.zIndex = 999;

		var clicker = this.button.onclick;
		this.box.onclick = this.__ondelete.bind(this, clicker);
		this.button.onclick =   this.__ondelete.bind(this, clicker);
	}

	static __makePointy(direct, head, text){

		var div1 = document.createElement('div');
		div1.className = 'buttontutorial ' + direct;

		// Now create and append to iDiv
		var divtext = document.createElement('div');
		divtext.className = 'buttontutorial_text';

		var h2er = document.createElement('p');
		h2er.innerText = head;

		divtext.innerText = text;
		divtext.insertBefore(h2er, divtext.firstChild);

		div1.appendChild(divtext)

		return div1;
	}

	__ondelete(clicker = null){
		this.box.parentNode.removeChild(this.box);
		this.bg.parentNode.removeChild(this.bg);

		this.button.style.zIndex = this.prev_zindex;

		clearInterval(this.timer);

		if (clicker !== null){
			clicker();
		}
	}

	static __getposVert(box) {return Number(box.style.marginTop.split('px')[0]) || 0;}
	static __getposHoriz(box){return Number(box.style.marginLeft.split('px')[0]) || 0;}
	static __setposVert(box, am){
		var num_unit_top = box.style.marginTop.split('px')[0];
		box.style.marginTop = (num_unit_top + am) + 'px';

		var num_unit_bot = box.style.marginBottom.split('px')[0];
		box.style.marginBottom = (num_unit_bot + am) + 'px';
	}
	static __setposHoriz(box, am){
		var num_unit_left = box.style.marginLeft.split('px')[0];
		box.style.marginLeft = (Number(num_unit_left) + am) + 'px';

		var num_unit_right = box.style.marginRight.split('px')[0];
		box.style.marginRight = (Number(num_unit_right) + am) + 'px';

//		console.log("marginL", num_unit_left, box.style.marginLeft);
//		console.log("marginR", num_unit_right, box.style.marginRight);

	}


	static __shake(box, vertical){

		var getcurrent, setcurrent;

		if (vertical){
			getcurrent = ButtonTutorial.__getposVert;  setcurrent = ButtonTutorial.__setposVert;
		}
		else {
			getcurrent = ButtonTutorial.__getposHoriz; setcurrent = ButtonTutorial.__setposHoriz;
		}

		// Movement
		var move = 1, mult = 1.4, diff= 10;

		var box_start  = getcurrent(box),
			box_offset = box_start - diff;

//		console.log("box_start", box_start, "box_offset", box_offset);

		// Shimmy
		var tim1 = setInterval(function(){
			var current = getcurrent(box);

		  	if (current <= box_offset ){
		    	move = mult;
//				console.log(current + " < " + box_offset, "moving " + move);
		  	}
		  	else if (current >= box_start ){
		    	move = -mult;
//				console.log(current + " >= " + box_offset, "moving " + move);
		  	}
		  	setcurrent(box, move );
		}, 80)

		return tim1
	}
}



/* Depreciated function

		// Padding shrink/grow
/*		var tock = 2,
			diff = 0.1,
			mult = diff;

		var tim2 = setInterval(function(){
			if(!userOpts.showTooltips){
				box.onclick();
			}

			if (tock > 4){
				mult = -diff
			}
			else if (tock <= 2){
				mult = diff
			}
			tock += mult;

			box.style.borderButtonWidth = tock+'px';
			box.style.padding = tock+'px'; 
		},80)
*/


var userTutorials = {

	__firstrun : false,
	__firstkey : "firstrun",

	__storeFirstRun(){
		localStorage.setItem(userTutorials.__firstkey, userTutorials.__firstrun);
	},

	__getFirstRun(){
		var val = localStorage.getItem(userTutorials.__firstkey);

		if (val === null){
			userTutorials.__firstrun = true;
			userTutorials.__storeFirstRun();
		}
		else {
			userTutorials.__firstrun = JSON.parse(val);
		}
		return userTutorials.__firstrun;
	},

	isFirstRun(){
		return userTutorials.__getFirstRun();
	},

	setFirstRun(bool){
		userTutorials.__firstrun = JSON.parse(bool);
		userTutorials.__storeFirstRun();
	},


	run(exitfunc = null)
	{
		if (userTutorials.isFirstRun()){
			userTutorials.__first(function ex()
			{
				userTutorials.setFirstRun(false);
				if (exitfunc!==null){
					exitfunc();
				}
			});
		}
	},
	
	__first(exitfunc = null){
		var pages = [
/*				["Welcome to HaploHTML5!",
			"This is a tool that helps you draw pedigrees from scratch, and or analyze haplotypes."],
*/
			{
				title: "Getting Started", 
			 	text : [
			  		"Since this is your first time, let's go through some tutorials!",
			  		"Tutorials can be navigated using the arrows in the top right corner, or exited completely by closing this window.\n\nTo move to the next screen, please click the forward direction icon\n(or press the Enter key)."
			  	]
			},

			{
				title: "Jumping Straight in!",
			 	type : "video",
			 	media: transcript.jumpintoit
			},


			{
				title: "Bindings",
				type : "video",
				media: transcript.bindings
			},

			{
				title: "Fine Control",
				type : "video",
				media: transcript.finecontrol,
			},

			{
				title: "Pedigree Creation",
				type : "video",
				media: transcript.pedcreate
			}
		];

		(new Tutorial( pages, exitfunc));
	},
/*	setToPedCreate : {},
	setToHaploView : {},
	setToSelectionMode : {},
	setToComparisonMode : {},
	setToHomologySelection : {},
	setToHomologyMode : {}*/
}





var transcript = {

	// -1 = pause
	//  0 = no delay (pass-through)
	//  x = x seconds delay

	jumpintoit : {
		 /* Shows all*/
		src   : "public_assets/videos/jumpintoit.post.webm",
		text  : {

			 0.0 : [0, "Choosing the mode","Visualize New Haplotypes"],
			 1.4 : [-1, "Uploading Files",""],
			 2.7 : [0, null, "In this case selecting 'Allegro'"],
			 4.2 : [-1, "Question Marks can be highlighted to show hints on the files", "ihaplo (phased genotypes),..."],
			 5.5 : [0.5, null, "... [Optional] founder file (to use existing points of recombination),..."],
			 6.6 : [0.5, null, "... or [Optional] map file (to show centiMorgan positions)."],
			 7.8 : [1, "Selecting the File", "where:\nihaplo (phased genotypes)\nfounder file (to use existing points of recombination)\nmap file (to show centiMorgan positions)"],
			 9.7 : [1, "Submitting and beginning the analysis", ""],
			11.0 : [-1, "Main View", ""],
			14.0 : [1, null, "Pedigrees can be moved around and modified internally before continuing to further analysis."],
			23.4 : [-1, "Selection View" , ""],
			24.5 : [1, null, "Selecting all affecteds via side buttons..."],
			26.5 : [1, null, "..or manually selecting with a single click."],
			27.8 : [-1, "Comparison View : Side-by-side analysis of the selected individuals' haplotypes.", ""],
			28.9 : [1, null, "Related individual are joined by lines showing the number of generations between them."],
			30.0 : [1, null, "Haplotypes for each selected individual with marker positions are expanded below."],
			31.0 : [-1, "Region Indicator (red line)", "The displayed locus can be scrolled through by dragging the indicator or scrolling the mousewheel."],
			33.5 : [1, null, "The locus can also be expanded/contracted by dragging either of the handles..."],
			36.8 : [1, null, "...where the entirety of the region can be examined by scrolling the mouse (if it exceeds window height )..."],
			43.3 : [2, "Marker Search", "...or a region of interest can be manually specified from a list of ordered markers."],
			52.1 : [2, "Recombination Finder", "Points of recombination can be automatically scrolled to."],
			55.3 : [2, "Change Founder Allele Colours", "If founder alleles are too hard to see, their colours can be randomized without affecting the analysis."],
			57.4 : [2, "Align the Pedigree", ""],
			62.1 : [-1, "Compare Genotypes", "Genotypes for selected individual can be compared to find regions of homology for those who share the same founder alleles (family-specific)."],
			68.3 : [1, null, "These are then plotted as vertical scores on the region indicator and the haplotypes which can be scrolled through."],
			73.1 : [2, "Exit mode", "Each mode can be exited by closing the window in the top-left"],
			79.4 : [2, "Save Analysis", "The analysis can be saved at any time..."],
			84.0 : [2, null, "...to be resumed at a later date without having to reupload the same data twice."],
			9999 : [0, "Please click the forward button to view the next tutorial", ""]
		}
	},

	bindings : {  
		/* Show settings, haploview, resume analysis, haplo scrolling, genotypes mode, marker */
		src   : "public_assets/videos/bindings.post.webm",
		text  : {
			 0.0 : [-1, "Shortcuts and Bindings", ""],
			 1.6 : [0, null, "Shortcuts settings can be accessed by clicking on the wheel in the bottom right of the main page."],
			 3.9 : [2, null, "Bindings can be modified by clicking on any of the labels..."],
			 4.5 : [2, null, "...and pressing a desired key combination on the keyboard (in this case simply 'F')."],
			 6.2 : [0, null, "(or Ctrl + M)"],
			 8.2 : [2, null, "Bindings can then be saved or restored to their defaults to exit the settings screen."],
			 9.0 : [0, null, "We can now test these bindings in any mode. For now let's resume a previous analysis and test them there."],
			14.2 : [2, null, "Tool descriptions and their associated bindings can be viewd by simply hovering the mouse over them."],
			25.9 : [2, null, "The viewport can be scrolled slowly using Arrow keys and quickily using PageUp/PageDown keys..."],
			33.2 : [1, null, "...points of recombination via '[' and ']' keys..."],
			39.5 : [1, null, "...Haploblock colouring via 'R'..."],
			9999 : [0, "Shortcuts and Bindings", "Click the forward button to view the next tutorial."]
		}
	},

	finecontrol : {  
		/* Shows scrolling in haploview */
		src   : "public_assets/videos/finecontrol.post.webm",
		text  : {
			0.0 : [-1, "Region of Interest Handling (General)", ""],
			0.9 : [ 2, null, "The indicator can drag the current viewport to a region of interest"],
			2.6 : [ 2, null, "To expand/shrink a viewport drag either handle..."],
			4.2 : [ 0, null, "... and release to update it."],
			5.2 : [ 2, null, "Viewports larger than the reigon that can be displayed within the screen area can be scrolled." ],
			7.8 : [-1, "Region of Interest Handling (Screen Snapping)", ""],
			8.1 : [ 2, null, "To lock the viewport to a size which can be displayed in the current screen, begin dragging a handle..."],
			8.9 : [ 2, null, "...and hold down the Control key whist moving..."],
			9.8 : [ 0, null, "...and release!"],
			10.5: [ 2, null, "Once locked, scrolling now moves the viewport instead of the screen."],
			13.2: [ 2, null, "The viewport lock can be broken by simply dragging a handle out of screen bounds again."],
			13.5: [-1, "Region of Interest Handling (Fine Control)", "For finer tuning, begin to drag a handle..."],
			14.4: [ 2, null, "... and hold Shift whilst dragging..."],
			15.9: [ 0, null, "...where the handle will then move with dampened sensitivity."],
			9999: [ 0, "Region of Interest Handling", "Click the forward button to view the next tutorial" ]
		}
	},

	pedcreate : {
		/* Assumes first run, shows pedcreate and ped resume */
		src   : "public_assets/videos/pedcreate.post.webm",
		text  : {
			0.0  : [-1, "Pedigree Creation", ""],
			//1.3  : [ 2, null,]
			1.9  : [2, null, "This is the blank Pedigree View canvas, with tools on the right."],
			2.9  : [2, "Pedigree Creation (Family)", "Families need to be added before other tools can work."],
			3.2  : [2, null, "If no family exists, a new family will be prompted first."],
			6.4  : [2, null, "Notice the family name given in bold to show that it is selected, and notice Individual '1' also created."],
			6.6  : [2, null, "Families can be moved around by dragging the family name"],
			7.9  : [2, "Pedigree Creation (Individual)", "Additional individuals must be created in order make relationships between them."],
			10.0 : [2, null, "Here we added two new individuals (2 and 3) to the active family, by default all unaffected males."],
			11.2 : [2, null, "Individual properties can be altered by double-clicking on the individual's node."],
			20.0 : [0, null, ""],
			26.1 : [2, "Pedigree Creation (Relationship)", "Now we need to connect mates to mates, and offspring to their parents."],
			26.7 : [2, null, "Target circles are drawn to show which individuals can be connected."],
			26.9 : [2, null, "Lines are drawn by simply clicking, dragging, and releasing in a valid end node."],
			28.7 : [2, null, "1 and 22 are now joined mates, and are vertically locked to show this."],
			35.1 : [2, null, "Let's now add some offspring."],
			35.9 : [2, null, "As with the Mate-Mate line previously, target circles highlight valid start points..."],
			36.3 : [2, null, "...but now the only valid end points are those that exist between two mates, indicated by white anchor nodes."],
			37.9 : [0, null, "Let's give Individual 3 a female mate and join on some more offspring."],
			48.6 : [2, null, "It seems we're modelling a dominant trait, so it makes sense to change individual 3 to affected."],
			61.3 : [2, null, "Notice how 4 and 5 are now vertically locked because they are siblings."],
			65.4 : [2, "Pedigree Creation (Export)", "We can export our pedigree to a new browser tab."],
			67.7 : [2, null, "Stripping graphics exports the pedigree into LINKAGE pre-MAKEPED format, otherwise we would see positional metadata"],
			70.1 : [0, null, "Closing the tab, we can return back to our pedigree."],
			71.3 : [2, "Pedigree Creation (Save/Resume)", "Pedigrees are saved as cookies to local browser storage."],
			74.0 : [2, null, "Our pedigree is saved. Exiting our pedigree brings us back to the main page."],
			75.6 : [2, null, "A new button allows us to resume the previously saved pedigree and continue where we left off."],
			9999 : [0, "Pedigree Creation", "Click on the forward button to view the next tutorial."]
		}
	}
}
class VideoTranscript {

	constructor(pageTutorial, source, transcript)
	{
		this.__symbolplay  = "&#9654";
		this.__symbolpause = "&#9646;&#9646";

		// Access to Top and Bottom modifiers
		this.pageTutor  = pageTutorial;
		this.transcript = transcript


		this.time_array = VideoTranscript.__makeTimeMap(transcript);
		this.container  = this.__makeVideoDiv(source);
		this.paused     = true;	

		this.video.ontimeupdate = this.__runTranscript.bind(this);
		this.video.onend        = this.__endTranscript;

		this.__keysset   = false;
		this.__nextTime  = -1;
		this.__lastIndex = 0; // transcript iterator
	}

	keyboardOn(){ /* Called by onEnter function in TutorialPage */

		if (this.__keysset === false){
			Keyboard.layerOn("video keys", false) //dont replace

			Keyboard.addKeyPressTask(" ", this.pauseplay.bind(this));
			Keyboard.addKeyPressTask("ArrowLeft", this.goPrevTrans.bind(this,true));
			Keyboard.addKeyPressTask("ArrowRight", this.goNextTrans.bind(this,true));
			this.__keysset = true;
		}
	}

	keyboardOff(){
		if (this.__keysset === true){
			Keyboard.layerOff();
			this.__keysset = false;
		}
	}

	destroy(){ /* called by TutorialPage.destroy() */
		this.keyboardOff();

		while(this.container.firstChild){
			this.container.removeChild(this.container.firstChild);
		}
		this.container.parentNode.removeChild(this.container);
	}

	getVideo(){
		return this.container;
	}

	goPrevTrans(){
		if (this.__lastIndex - 1 < 0){
			return 0;
		}

		this.__nextTime = this.time_array[this.__lastIndex];

		var time = this.time_array[--this.__lastIndex];
		this.video.currentTime = time;
		this.__setText( this.transcript[time] )

		this.pauseVideo(true);
	}

	goNextTrans(){
		if (this.__lastIndex + 1 >= this.time_array.length){
			return 0;
		}

		var time = this.time_array[++this.__lastIndex];

		this.video.currentTime = time;
		this.__setText( this.transcript[time] );

		this.__nextTime = this.time_array[this.__lastIndex +1];
		this.pauseVideo(true);
	}


	__animatePlaySwitch(pause)
	{
		var that = this;
		that.playicon.style.opacity = 1;
		that.playicon.style.display = "block";

		that.playicon.innerHTML = (!pause)?that.__symbolpause:that.__symbolplay;

		setTimeout(function(){
			that.playicon.innerHTML = (pause)?that.__symbolpause:that.__symbolplay;

			setTimeout(function(){
				that.playicon.style.opacity = 0.8;

				setTimeout(function(){
					that.playicon.style.opacity = 0.5;

					if (!pause){
						setTimeout(function(){
							that.playicon.style.opacity = 0.2;
							that.playicon.style.display = "none";
						}, 50);
					}
				}, 50);
			}, 50);
		},100);
	}

	playVideo(user_set = false){ 
		this.paused = false;
		this.user_set = user_set;

		this.video.play();
		this.__animatePlaySwitch(false)
	}

	pauseVideo(user_set = false){
		this.paused = true;
		this.user_set = user_set;

		this.video.pause();
		this.__animatePlaySwitch(true)
	}


	pauseplay(){
		console.log(this.video.currentTime);
		if (this.paused){
			this.playVideo();
		} else {
			this.pauseVideo();
		}
	}


	__endTranscript(){
		var currentTrans = this.transcript[this.transcript.length-1];
		this.__setText(currentTrans);
	}


	__runTranscript(event)
	{
		var timediff = event.target.currentTime - this.__nextTime;

		// Too early, come back later
		if (timediff < 0){
			return -1;
		}

		this.__nextTime = this.time_array[++this.__lastIndex];

		// Too late, find 
		if (timediff > 5){
			return 1;
		}

		// Else grab transcript
		var currentTrans = this.transcript[
			this.time_array[this.__lastIndex - 1]
		];
		this.__setText(currentTrans);

		return 0;
	}


	__setText(trans_at_time){

		var page  = this.pageTutor,
			video = this.video;

		var delay = trans_at_time[0],
			top   = trans_at_time[1],
			bot   = trans_at_time[2];

		if (top!==null){page.modifyTop(top)};
		if (bot!==null){page.modifyBot(bot)};

		var that = this;

		switch(delay){
			case -1:
				that.pauseVideo();
				break;
			case 0:
				break;
			default:
//				that.video.pause();
				that.pauseVideo();
				setTimeout(function(){
					if (!that.user_set){
//						that.video.play();
						that.playVideo();
					}
				}, delay * 1000);
		}
	}


	__makeVideoDiv(src){
		var parent  = document.createElement('div'), /* relative */
			divmain = document.createElement('div'), /* absolute */
			med 	= document.createElement('video'),
			source  = document.createElement('source');
		
		med.controls = "";
		source.type  = "video/webm";
		source.src   = src;
	
		med.appendChild(source);


		var div   = document.createElement('div'),
			play  = document.createElement('div'),
			prev  = document.createElement('button'),
			next  = document.createElement('button');


		parent.className  = 'videocontainer_parent';
		divmain.className = 'videocontainer';
		div.className     = "videobuttons";
		play.id           = 'vidplay';
		
		//div.appendChild(play);
		div.appendChild(prev);
		div.appendChild(next);

		divmain.appendChild(med);
		divmain.appendChild(div);

		parent.appendChild(play);
		parent.appendChild(divmain);
		
		play.innerHTML = this.__symbolplay;
		prev.innerHTML = '<'
		next.innerHTML = '>'

		play.title = " [ Spacebar ] "
		prev.title = " [   Left  ]"
		next.title = " [  Right  ]"

		med.onclick  = this.pauseplay.bind(this);
		play.onclick = this.pauseplay.bind(this);
		prev.onclick = this.goPrevTrans.bind(this);
		next.onclick = this.goNextTrans.bind(this);


		// Autoplay
/*		var that = this;
		
		var check = document.createElement('input'),
			label = document.createElement('label');
		
		div.appendChild(label);

		label.innerHTML = "autoplay";
		label.appendChild(check);
		
		check.type = "checkbox";
		check.checked = true;
		check.onchange = function(){
			that.autoplay = this.checked;
		}
*/

		this.playicon = play;
		this.video    = med;

		return parent;
	}


	static __makeTimeMap(transcript){
		return Object.keys(transcript).sort(
			function(a,b){
				return Number(a) - Number(b);
			}
		);
	}


	static __binarySearch(val, ordered_array){

		function binary_search(val, left, right) {
			if (left > right) return null;

			var mid = (left + right) >> 1; //div

		 	if (val == ordered_array[mid]) {
				return mid;
			} else if (val > ordered_array[mid]) {
				return binary_search(val, mid + 1, right);
			} else {
				return binary_search(val, left, mid - 1);
			}
		}
		return binary_search(val, 0, ordered_array.length - 1);
	}
}



var PED = {
	MALE : 1,
	FEMALE : 2,
	UNAFFECTED : 1,
	AFFECTED : 2,
	UNKNOWN : 0,
}





// Draw globals
var nodeSize = 10;
var horiz_space = 60,
    vert_space = 50;

var default_stroke_color = 'blue',
    default_font = "bold 10px Courier";

var grid_rezY = nodeSize*6,
	grid_rezX = nodeSize*2;

var HAP_DRAW_LIM = 30; // No more than 30 haplotypes on screen
var	HAP_MIN_DRAW = 100;  // Minimum before haplos are updated on drag.
var HAP_VERT_SPA = 10;  // <-- DO NOT MODIFY


var col_affs = [
    'grey',        // 0 - Unknown
    'white',       // 1 - Unaffected
    'red'];        // 2 - Affected





function intersectArrays(a,b){
	var ai=0, bi=0;
	var result = new Array();

	while( ai < a.length && bi < b.length )
	{
		if      (a[ai].id < b[bi].id ){ ai++; }
		else if (a[ai].id > b[bi].id ){ bi++; }
		else /* they're equal */
		{
			result.push(a[ai]);
			ai++;
			bi++;
		}
	}
	return result;
}




function exportToTab(text)
{
	function makeTextFile(tex, textFile = null)
	{
		var data = new Blob([tex],{type:'text/plain'});

		if (textFile !== null){
			window.URL.revokeObjectURL(textFile);
		}

		textFile = window.URL.createObjectURL(data);
		return textFile;
	}
	window.open(makeTextFile(text));
}


// Padding for fixed width output
String.prototype.paddingLeft = function (paddingValue) {
   return String(paddingValue + this).slice(-paddingValue.length);
};

String.prototype.center = function(padding){
	var pN = padding.length,
		tN = this.length;

	if (pN < tN){
		console.log(this,padding.length);
		throw Error("Text to small to fit in padding");
	}

	var todist = pN - tN,
		rightN = Math.floor(todist / 2),
		leftN  = todist - rightN;

	return String(padding.slice(0,leftN) + this + padding.slice(-rightN));

}


// Console.assert is better
//function assert(bool, message){                     //General error handling
//    if (!bool) throw new Error(message);
//}

// for some reason keys wont sort numerically for negative keys
function sortedKeys(mapper){
	return Object.keys(mapper).sort(function (a,b){ return a - b});
}

function map2orderedArray(mapper){
	var keys = sortedKeys(mapper);

	var ordered_array = [];

	for (var k = 0; k < keys.length; k++){
		var obj = mapper[keys[k]];
		
		ordered_array.push(obj);
	}

	return ordered_array;
}

function isEmpty(map){
	return Object.getOwnPropertyNames(map).length === 0;
}


var in2Space = function(integ){
	var tx="";
	while (integ --> 0){tx += " "};
	return tx;
}

// units are em except when px is used
var haploblock_settings = {
	space_pixels: 6,    // 1em for monospace 10
	marker_offset: 1,
	ht_offset: 7,
	ht_2_ht: 1
};
//Do not edit this!
var haploblock_buffers = {
	marker_offset : in2Space(haploblock_settings.marker_offset),
	ht_offset : in2Space(haploblock_settings.ht_offset),
	ht_2_ht : in2Space(haploblock_settings.ht_2_ht)
};


var haploblock_spacers = {
	marker_offset_px: ((MarkerData.maxlen_marker+1)*haploblock_settings.space_pixels)+1,
	person_offset_px: 60.19, //10 * haploblock_settings.space_pixels,
	block_width_px: HAP_VERT_SPA*1.2,
	block_offset_px: (HAP_VERT_SPA*1.2) +2
};


// This should not be optimized for graphics, this is for data processing only(!!)
//
class Person {

	constructor(id, gender, affected, mother = 0, father = 0, name = null)
	{
		this.id = Number(id);
		this.gender = Number(gender);     // 1 - male, 2-female, 0-unknown
		this.affected = Number(affected); // 0,1,2

		this.mother = Number(mother); 
		this.father = Number(father);
		this.haplo_data = [];  			// [Allele1, Allele2]

		this.mates = [];
		this.children = [] 				// added by connect method later

		//Optional
		this.name = name;

		//Placeholder to be immediately deleted after read
		this.stored_meta;
	}

	insertDescentData(normal_array){

		if (this.haplo_data[0].descent === null){
			this.haplo_data[0].addDescent(normal_array) // paternal
			return 0;
		}

		if (this.haplo_data[1].descent === null){
			this.haplo_data[1].addDescent(normal_array); //maternal
			return 0;
		}
		throw new Error(this.id+" already has populated Alleles");
	}

	insertFlowData(normal_array){

		if (this.haplo_data[0].flow === null){
			this.haplo_data[0].addFlow(normal_array) // paternal
			return 0;
		}

		if (this.haplo_data[1].flow === null){
			this.haplo_data[1].addFlow(normal_array); //maternal
			return 0;
		}
		throw new Error(this.id+" already has populated Alleles");
	}


	setHaplogroupArray(normal_array){
		if (this.haplo_data[0].haplogroup_array === null){
			this.haplo_data[0].haplogroup_array = new Int8Array(normal_array);
			return 0;
		}

		if (this.haplo_data[1].haplogroup_array === null){
			this.haplo_data[1].haplogroup_array = new Int8Array(normal_array);
			return 0;
		}
		throw new Error(this.id+" already has haplogroups set!");
	}
	

	insertHaploData(normal_array){
		var num_alleles = this.haplo_data.length;

		if (num_alleles === 0){
			this.haplo_data.push( new Allele(normal_array) );
			return 0;
		}
		if (num_alleles === 1){
			var chromlen = this.haplo_data[0].getLength();
			if (chromlen === normal_array.length){
				this.haplo_data.push( new Allele(normal_array) );
				return 0;
			}
			console.log(this);
			throw new Error(this.id+" Allele sizes not consistent! "+chromlen+" vs "+normal_array.length);
		}
		throw new Error(this.id+" already has populated Alleles");
	}

	// Identical in relationships
	isDoppelGanger(pers2){
		if ((this.mother === pers2.mother) && (this.father && pers2.father)){
			if (this.mates.length === pers2.mates.length){
				for (var c=0; c < this.mates.length; c++){
					if (this.mates[c].id !== pers2.mates[c].id){
						return false;
					}
				}

				if (this.children.length === pers2.children.length){
					for (var c=0; c < this.children.length; c++){
						if (this.children[c].id !== pers2.children[c].id){
							return false
						}
					}
					return true;
				}
			}
		}
		return false;
	}

	isMate(pers2){
		var compare = pers2;
		if (pers2 === 0){
			compare = {id:0}
		}

		for (var m=0; m < this.mates.length; m++){
			if (compare.id == this.mates[m].id){return true};
		}
		return false;
	}

	foreachmate(callback){
		for (var m=0; m < this.mates.length; m++){
			var mate = this.mates[m];
			callback(mate, m);
		}
	}

	foreachchild(mate, callback){

		var common_children = intersectArrays(this.children, mate.children)

		for (var c=0; c < common_children.length; c++){
			var child = common_children[c];
			callback(child, c);
		}
	}

	hasHaplo(){
		return this.haplo_data.length > 1 && this.haplo_data[0].haplogroup_array !== null;
	}

	hasChild(child){
		for (var c=0; c < this.children.length; c++){
			if (child.id === this.children[c].id){return true};
		}
		return false;
	}

	isFounder(){
		return (this.mother === 0 && this.father === 0);
	}

	addMate(mate){
		// Already exists
		if (this.isMate(mate)){
			return -1;
		}
		this.mates.push(mate);
	}

	removeMate(mate){
		if (this.isMate(mate)){
			var mate_index = this.mates.map(function(a){return a.id;}).indexOf(mate.id);
			if (mate_index !== -1){
				this.mates.splice(mate_index,1);
				return 0;
			}
		}
		return -1
	}

	addChild(child){
		// Already exists
		if (this.hasChild(child)){
			return -1;
		}
		this.children.push(child);
	}

	removeChild(child){
		if (this.hasChild(child)){
			var child_index = this.children.map(function(a){return a.id;}).indexOf(child.id)
			if (child_index !== -1){
				this.children.splice(child_index,1);
				return 0
			}
		}
		return -1
	}
}
// Each locus in each person's allele has {data} and a {founder pointer}
class Allele {

	constructor(data){
		this.data_array = new Int8Array(data);
		this.pter_array = [];
		// points to the founder allele group (retrieved from parent, and recursively points to founder allele group)

		//In order to pass pointers, I need to add properties to color_groups
		for (var i=0; i < data.length; i++)
			this.pter_array.push( {color_group: []} ); 	//Array due to phase ambiguity

		this.haplogroup_array = null;
		this.unique_groups = [];
		// ^ Empty until pter_array is completely unambiguous, where pter_array is then deleted (dereferenced, left for GC)

		// UNUSED UNLESS SPECIFIED
		this.descent = null;    // Descent data [1 2 1 2 1 1 1]
		this.flow = null        // Flow data    [A A A A B B G]
	}

	addFlow(data){
		this.flow = new Int8Array(data);
	}

	addDescent(data){
		this.descent = new Int8Array(data);
	}

	getLength(){
		return this.data_array.length
	}

	debug(){
		return {
			data: this.data_array,
			groups: (this.pter_array.map(
				function (n){
					return ""+n.color_group+"";
				}
			)),
			unique: this.unique_groups
	// 				).reduce(
	// 			function (s,a){
	// 				return s+"],["+a;
	// 			})
		};
	}
}
var familyMapOps = {

	_map : {}, // fam_id ---> pedigree map --> person

	_insertionLog : {}, // famid+pedid : counter of how many times attempted insertion
						// should not exceed 2 (per allele line from pedfile)

	clear: function(){
		familyMapOps._map = {}; // reset
	},


	foreachfam: function( callback ){
		for (var fam in familyMapOps._map){
			callback(fam, familyMapOps.getFam(fam));
		}
	},

	/* If fam_id given, it just iterates over people in the specified famid */
	foreachperc: function( callback, fam_id = null ){
		if (fam_id === null){
			for (var fid in familyMapOps._map){
				for (var pid in familyMapOps.getFam(fid)){
					callback(pid, fid, 
						familyMapOps.getPerc(pid,fid)
					);
				}
			}
		}
		else{
			for (var pid in familyMapOps.getFam(fam_id)){
				callback(pid, 
					familyMapOps.getPerc(pid,fam_id)
				);
			}
		}
	},

	numFams : function(){
		var count = 0
		for (var fam in familyMapOps._map){
			count ++
		}
		return count;
	},

	numPercs: function( famid ){
		var count = 0;
		for (var perc in familyMapOps._map[famid]){
			count ++;
		}
		return count;
	},


	getRandomPerc: function(){
		for (var fam in familyMapOps._map){
			return familyMapOps.getFirst(fam);
		}
		throw new Error("No families");
	},

	/* Grab the first individual */
	getFirst: function( family_id ){
		for (var ped in familyMapOps.getFam(family_id)){
			return familyMapOps.getPerc(ped,family_id);
		}

		return -1
	},

	_loginsertion: function(person_id,family_id){
		var key = family_id+"_"+person_id;
		familyMapOps._insertionLog[key] = familyMapOps._insertionLog[key] + 1 || 1;
		return familyMapOps._insertionLog[key];
	},


	_insertPercAsChild: function(person, family_id){
		if (person.mother !== 0){
			person.mother.addChild(person);
		}
		if (person.father !== 0){
			person.father.addChild(person);
		}
	},

	_removePercAsChild: function(person, family_id){
		if (person.mother !== 0){
			person.mother.removeChild(person);
		}
		if (person.father !== 0){
			person.father.removeChild(person);
		}
	},

	_removePercAsMate: function(person, family_id){
		if (person.mates.length > 0){
			person.foreachmate(function(mate){
				mate.removeMate(person);
			});
		}
	},

	_removePercAsParent: function(person, family_id){
		if (person.children.length > 0){
			var isMother = person.gender === PED.FEMALE;
			
			person.foreachmate(function(mate)
			{
				person.foreachchild(mate, function(child){
					if (isMother){
						child.mother = 0;
					} else {
						child.father = 0;
					}
				});
			});
		}
	},

	/* used outside of default insertPerc function*/
	insertPercAsParent: function(person, family_id, children){
		var isMother = person.gender === PED.FEMALE;

		for (var c=0; c < children.length; c++){
			if (isMother){
				children[c].mother = person;
			} else {
				children[c].father = person;
			}
		}
	},

	updatePerc: function(old_id, person, family_id){
		var oldperson = familyMapOps.getPerc(old_id, family_id);

		oldperson.id = person.id;
		oldperson.name = person.name;
		oldperson.gender = person.gender;
		oldperson.affected = person.affected;
	},


	updateIntoPerc: function(old_id, person, family_id)
	{
		if (familyMapOps.percExists(old_id, family_id)){
			familyMapOps.updatePerc(old_id,person, family_id);
			return 0;
		}

		familyMapOps.insertPerc(person, family_id);
	},


	insertPerc: function(person, family_id){
		
		if (!(family_id in familyMapOps._map)){
			familyMapOps._map[family_id] = {}
			console.log("FMO: added new fam", family_id);
		}
		
		var num_attempts = familyMapOps._loginsertion(person.id, family_id);		

		if (!(person.id in familyMapOps._map[family_id])){
			familyMapOps._map[family_id][person.id] = person;
			//familyMapOps._insertPercAsChild(person, family_id);

			return 0;
		}

		if (num_attempts >2){
			console.log(person.id,"already in", family_id, num_attempts, "times")
		}
		return -1;
	},

	getFam: function(family_id){
		if (familyMapOps.famExists(family_id)){
			return familyMapOps._map[family_id];
		}
		return -1;
	},

	removeFam: function(family_id){
		if (familyMapOps.famExists(family_id)){
			delete familyMapOps._map[family_id];
			return 0;
		}
		return -1;
	},

	famExists: function(family_id){
		return (family_id in familyMapOps._map);
	},

	percExists: function(person_id, family_id){
		if (familyMapOps.famExists(family_id)){
			return (person_id in familyMapOps.getFam(family_id));
		}
		return false;
	},

	removePerc: function(person_id, family_id)
	{
		if (family_id in familyMapOps._map){
			if (person_id in familyMapOps._map[family_id])
			{
				var person = familyMapOps.getPerc(person_id, family_id);

				familyMapOps._removePercAsChild(person, family_id);
				familyMapOps._removePercAsMate(person, family_id);
				familyMapOps._removePercAsParent(person, family_id);

				delete familyMapOps._map[family_id][person_id];

				return 0;
			}
			console.log(person_id,"not in", family_id)
			return -1;
		}
		console.log(family_id, "not in map");
		return -1;
	},

	getPerc: function(person_id, family_id)
	{
		if (person_id in familyMapOps._map[family_id]){
			return familyMapOps._map[family_id][person_id];
		}
		throw new Error(person_id + " not in " + family_id);
	},

	inferGenders : function(family_id = null){

		familyMapOps.foreachperc(function(pid,fid,perc){

			if (perc.gender === PED.UNKNOWN){
				//console.log("unknown", perc.id, perc.children);

				if (perc.children.length > 0){
					var firstChild = perc.children[0];

					var mother_id = firstChild.mother.id,
						father_id = firstChild.father.id;

					//console.log("unknown has kids", perc.id, mother_id, father_id);

					if (mother_id === perc.id){
						perc.gender = PED.FEMALE;
					}
					else if (father_id === perc.id){
						perc.gender = PED.MALE
					}
					else {
						throw new Error(perc, firstChild);
					}
				}
			}
		}, family_id);
	}
}

var uniqueGraphOps = {

	_map : {}, // fam_id --> Holds node and edge data, including pointers to graphics
	haplo_scroll : null,
	haplo_area : null,

	clear: function(){
		uniqueGraphOps._map = {};
	},

	foreachfam: function(callback){
		for (var fam in uniqueGraphOps._map){
			callback(fam, uniqueGraphOps.getFam(fam));
		}
	},

	foreachnode: function(callback, fam_id = null){
		if (fam_id === null){

			for (var fam in uniqueGraphOps._map){
				for (var node in uniqueGraphOps.getFam(fam).nodes){
					if (node === "0"){
						continue;
					}
					callback(node, fam, uniqueGraphOps.getNode(node, fam));
				}
			}
		} else {
			for (var node in uniqueGraphOps.getFam(fam_id).nodes){
				if (node === "0"){
					continue;
				}
				callback(node, uniqueGraphOps.getNode(node, fam_id));
			}
		}
	},


	foreachedge: function(callback, fam_id = null){
		if (fam_id === null){

			for (var fam in uniqueGraphOps._map){
				for (var edge in uniqueGraphOps.getFam(fam).edges){
					callback(edge, fam, uniqueGraphOps.getEdge(edge, fam));
				}
			}
		} else {
			for (var edge in uniqueGraphOps.getFam(fam_id).edges){
				callback(edge, uniqueGraphOps.getEdge(edge, fam_id));
			}
		}
	},

	insertFam: function(family_id, fam_group){

		if (!(family_id in uniqueGraphOps._map))
		{
			uniqueGraphOps._map[family_id] = {
				nodes:{},
				edges:{},
				group: fam_group
			};

			console.log("UGO: created new fam", family_id)
			return 0;
		}
		return -1;
	},

	deleteFam: function(family_id){
		if (family_id in uniqueGraphOps._map){
			delete uniqueGraphOps._map[family_id];
			return 0;
		}
		throw new Error("No such family "+family_id);
	},

	getFam: function(family_id){
		if (family_id in uniqueGraphOps._map){
			return uniqueGraphOps._map[family_id];
		}
		throw new Error("No such family "+family_id);
	},

	famExists: function(family_id){
		return (family_id in uniqueGraphOps._map);
	},

	edgeExists: function(key, family_id){
		if (family_id in uniqueGraphOps._map){
			return (key in uniqueGraphOps._map[family_id].edges)		
		}
		throw new Error("No such family "+family_id);
	},


	nodeExists: function(key, family_id){
		if (family_id in uniqueGraphOps._map){
			return (key in uniqueGraphOps._map[family_id].nodes)
		}
		throw new Error("No such family "+family_id);
	},


	insertNode: function(id, family_id, graphics)
	{
		this.insertFam(family_id);

		if (!(id in uniqueGraphOps._map[family_id].nodes)){
			uniqueGraphOps._map[family_id].nodes[id] = {graphics:graphics};
			console.log("UGO: created new node", id, "in", family_id);
			return 0;
		}
		return -1;
	},

	deleteNode: function(id, family_id)
	{
		if (family_id in uniqueGraphOps._map){
			if (id in uniqueGraphOps._map[family_id].nodes)
			{
				uniqueGraphOps._map[family_id].nodes[id].graphics.destroy();
				delete uniqueGraphOps._map[family_id].nodes[id];
				return 0;
			}
		}
		throw new Error("No such node "+id);
	},

	getNode: function(id, family_id){
		if (family_id in uniqueGraphOps._map){
			if (id in uniqueGraphOps._map[family_id].nodes){
				return uniqueGraphOps._map[family_id].nodes[id];
			}
		}
		throw new Error("No such node "+id);
	},


	insertEdge: function(id, family_id, graphics,
		start_join_id = null,
		end_join_id = null,
		type = null,
		consangineous = null)
	{
		if (!(id in uniqueGraphOps._map[family_id].edges)){
			uniqueGraphOps._map[family_id].edges[id] = {
				graphics:graphics,
				start_join_id : start_join_id,
				end_join_id : end_join_id,
				consangineous: consangineous,
				type: type,
			};
			console.log("UGO: created new edge", id, "in", family_id);
			return 0;
		}
		return -1;
	},

	deleteEdge: function(id, family_id)
	{
		if (family_id in uniqueGraphOps._map){
			if (id in uniqueGraphOps._map[family_id].edges){
				uniqueGraphOps._map[family_id].edges[id].graphics.destroy();
				delete uniqueGraphOps._map[family_id].edges[id];
				return 0;
			}
		}
		return -1;
	},

	transferEdge: function(family_id, oldid, newid){
		console.log("transferring", oldid, newid);

		var old_edge = uniqueGraphOps.getEdge(oldid, family_id);
		delete uniqueGraphOps._map[family_id].edges[oldid];
		uniqueGraphOps.insertEdge(newid, family_id, old_edge.graphics,
			old_edge.start_join_id,
			old_edge.end_join_id,
			old_edge.type,
			old_edge.consangineous);
	},

	getEdge: function(id, family_id)
	{
		if (family_id in uniqueGraphOps._map){
			if (id in uniqueGraphOps._map[family_id].edges){
				return uniqueGraphOps._map[family_id].edges[id];
			}
		}
		throw new Error("No such edge "+id);
	},

	getChildEdge: function(family_id, father_id, mother_id, child_id)
	{
		if (family_id in uniqueGraphOps._map)
		{
			var mate_key = edgeAccessor.matelineID(father_id, mother_id)
			if (uniqueGraphOps.edgeExists(mate_key, family_id))
			{
				var child_key = edgeAccessor.childlineID(mate_key, child_id)
				if (uniqueGraphOps.edgeExists(child_key, family_id)){
					return child_key;
				}
				throw new Error("No such child edge "+child_key);
			}
			throw new Error("No such mate edge "+mate_key);
		}
		throw new Error("No such family "+family_id);
	},

	makeChildEdge: function(family_id, father_id, mother_id, child_id)
	{
		if (family_id in uniqueGraphOps._map)
		{
			var mate_key = edgeAccessor.matelineID(father_id, mother_id);
			var child_key = edgeAccessor.childlineID(mate_key, child_id);
			return child_key;
		}
		throw new Error("No such family "+family_id);
	},


	findAllOffspringEdges: function(family_id, father_id, mother_id)
	{
		if (family_id in uniqueGraphOps._map)
		{
			var mate_key = edgeAccessor.matelineID(father_id, mother_id);

			var child_edges = [];
			for (var edge in uniqueGraphOps._map[family_id].edges){
				if (edge.startsWith("c:"+mate_key+"-")){
					child_edges.push(edge);
				}
			}
			return child_edges
		}
		throw new Error("No such family "+family_id);
	},

	getMateEdge: function(family_id, father_id, mother_id)
	{
		if (family_id in uniqueGraphOps._map)
		{
			var mate_key = edgeAccessor.matelineID(father_id, mother_id)
			if (uniqueGraphOps.edgeExists(mate_key, family_id))
			{
				return mate_key;
			}
		}
		throw new Error("No such family "+family_id);
	}
}


var SliderHandler = {

	i_slider_top_y:0,
	i_slider_length:0,
	inputsLocked : false,

	// -- Drag specific -- //
	inputDragFunc( abspos ){
		var perc, rsindex;

		// Dampening in effect
		if (Keyboard.isShiftDown())
		{
			MouseStyle.changeToArrowCursor();

			var center = (SliderHandler.i_slider_top_y + SliderHandler.i_slider_length/2);
			var diff_from_center = Math.abs(center - abspos.y);
			
			abspos.y = center + 0.2 * diff_from_center;
		
		} else {
			this.isTop?MouseStyle.changeToVerticalN():MouseStyle.changeToVerticalS();
		}


		var lockmargin = 30,
			lockToRange = false;

		// Out of the way swirly glasses...
		if (this.isTop){
			var atstart = false;

			if (abspos.y >= MarkerSlider._last_input2_posy){abspos.y  = MarkerSlider._last_input2_posy;}
			if (abspos.y <= MarkerSlider._rangeline_pos.y){
				abspos.y  = MarkerSlider._rangeline_pos.y + 1;
				atstart = true;
			}
			perc =  (abspos.y - MarkerSlider._rangeline_pos.y) / MarkerSlider._config.slider_height;
			rsindex = (atstart?0:Math.floor(perc * MarkerData.getLength()));

			MarkerSlider._last_input1_posy = abspos.y;

			if (Keyboard.isCtrlDown() &&  MarkerSlider._last_input2_ind){
				var frontindex = (MarkerSlider._last_input2_ind - Resize.numVisibleHaplos);
//					backindex = frontindex - lockmargin;

//				if (rsindex >= backindex && rsindex <= frontindex){
					lockToRange = true;
					rsindex = frontindex;
//				}
			}
			MarkerSlider._last_input1_ind = rsindex;

		}
		// Always obstructing our forwards momentum...
		else {
			var atend = false;

			if (abspos.y <= MarkerSlider._last_input1_posy){
				abspos.y  = MarkerSlider._last_input1_posy;
			}
	 		if (abspos.y > MarkerSlider._rangeline_pos.y + MarkerSlider._config.slider_height){
				abspos.y = MarkerSlider._rangeline_pos.y + MarkerSlider._config.slider_height;
				atend = true;
			}

			perc =  (abspos.y - MarkerSlider._rangeline_pos.y) / MarkerSlider._config.slider_height;
			rsindex = (atend?MarkerData.getLength()-1:Math.floor(perc * MarkerData.getLength()));

			MarkerSlider._last_input2_posy = abspos.y;

			if (Keyboard.isCtrlDown() && MarkerSlider._last_input1_ind){
				var backindex = (MarkerSlider._last_input1_ind + Resize.numVisibleHaplos);
//					frontindex = backindex + lockmargin;

//				if (rsindex >= backindex && rsindex <= frontindex){
					lockToRange = true;
					rsindex = backindex;
//				}
			}
			MarkerSlider._last_input2_ind = rsindex;
		}


		var new_y = abspos.y;
		if (lockToRange){
			new_y = SliderHandler.__updateSingleInputByIndex(rsindex, this.isTop);
		}
		SliderHandler.inputsLocked = lockToRange;

		this.message.setText(MarkerData.padded[rsindex]);

		SliderHandler.updateSlide(lockToRange);

		return {x: this.getAbsolutePosition().x, y: new_y};
	},

	sliderDragFunc( p ){
		// p.y is the top I bar

		// Get top and bottom I's;
		var top_I = p.y - MarkerSlider._rangeline_pos.y,
			bot_I = top_I + SliderHandler.i_slider_length;

	  	if (top_I < 0){
	  		top_I = 0;
			bot_I = top_I + SliderHandler.i_slider_length;
		}
	  	else if (bot_I >= MarkerSlider._config.slider_height){
			bot_I = MarkerSlider._config.slider_height;
			top_I = bot_I - SliderHandler.i_slider_length;
		}

	 	SliderHandler.updateInputsByPos(top_I, bot_I);

		return {
			x: this.getAbsolutePosition().x,
			y: top_I + MarkerSlider._rangeline_pos.y
		};
	},


	// --- Non-drag specific, but called by Drag Events
	updateSlide(rangelocked)
	{
		if (MarkerSlider._rangeline_pos === null){
			return -1;
		}

		var offs = MarkerSlider._config.I_slider_offset;

		SliderHandler.i_slider_top_y = MarkerSlider._last_input1_posy - MarkerSlider._rangeline_pos.y;
		SliderHandler.i_slider_length= MarkerSlider._last_input2_posy - MarkerSlider._last_input1_posy;

		var top_slider = [-offs, 0 ],
			bot_slider = [-offs, SliderHandler.i_slider_length];

		MarkerSlider._slwin_group.setY(SliderHandler.i_slider_top_y);

		MarkerSlider._slwin_group.line.setPoints([
			-MarkerSlider._style.bevel+ top_slider[0] + offs*2, top_slider[1] + MarkerSlider._style.bevel,
			top_slider[0], top_slider[1] + MarkerSlider._style.bevel,
			bot_slider[0], bot_slider[1] + MarkerSlider._style.bevel,
			-MarkerSlider._style.bevel + bot_slider[0] + offs*2, bot_slider[1] + MarkerSlider._style.bevel
		]);

		var diff = MarkerSlider._last_input2_ind - MarkerSlider._last_input1_ind;

		if (diff > Resize.numVisibleHaplos){
			diff = "[" + diff + "]";
		}
		if (MarkerData.hasGPData){
			diff += " (" + (
					""+(MarkerData.gp_array[ MarkerSlider._last_input2_ind ] - MarkerData.gp_array[ MarkerSlider._last_input1_ind ])
					+"").slice(0,5) + " cM)"
		}

		var strokeWidth = 1;
		if (rangelocked){
			strokeWidth = 3;
		}
		MarkerSlider._slwin_group.line.setStrokeWidth(strokeWidth);
		MarkerSlider._sl_input1.line.setStrokeWidth(strokeWidth);
		MarkerSlider._sl_input2.line.setStrokeWidth(strokeWidth);

		MarkerSlider._slwin_group.message.setText( diff );
		MarkerSlider._slwin_group.message.setY( (SliderHandler.i_slider_length/2) - HAP_VERT_SPA/2 );
	},

	updateInputsByPos(top,bot)
	{
		MarkerSlider._sl_input1.setY(top);
	 	MarkerSlider._sl_input2.setY(bot);

	 	MarkerSlider._last_input1_ind = (top===0)?0:Math.floor(top * MarkerData.getLength()/ MarkerSlider._config.slider_height),
		MarkerSlider._last_input2_ind = (bot===MarkerSlider._config.slider_height)?MarkerData.getLength()-1:Math.floor(bot * MarkerData.getLength()/ MarkerSlider._config.slider_height);

		MarkerSlider._sl_input1.message.setText( MarkerData.padded[MarkerSlider._last_input1_ind] );
		MarkerSlider._sl_input2.message.setText( MarkerData.padded[MarkerSlider._last_input2_ind] );

		MarkerSlider._last_input1_posy = top + MarkerSlider._rangeline_pos.y;
		MarkerSlider._last_input2_posy = bot + MarkerSlider._rangeline_pos.y;
	},


	__updateSingleInputByIndex(index, isTop){
		if (index >= MarkerData.getLength()){
			index = MarkerData.getLength() -1
		}
		else if (index < 0){
			index = 0
		}

		var ypos = (index / MarkerData.getLength()) * MarkerSlider._config.slider_height;

		if (isTop){
			MarkerSlider._last_input1_ind = index;
			MarkerSlider._sl_input1.setY(ypos);
			MarkerSlider._sl_input1.message.setText( MarkerData.padded[MarkerSlider._last_input1_ind] );
			MarkerSlider._last_input1_posy = ypos + MarkerSlider._rangeline_pos.y;
		}
		else {
			MarkerSlider._last_input2_ind = index;
			MarkerSlider._sl_input2.setY(ypos);
			MarkerSlider._sl_input2.message.setText( MarkerData.padded[MarkerSlider._last_input2_ind] );
			MarkerSlider._last_input2_posy = ypos + MarkerSlider._rangeline_pos.y;
		}
		return ypos + MarkerSlider._rangeline_pos.y;
	},


	updateInputsByIndex(ind1, ind2)
	{
		ind1 = ind1 || HaploBlock.sta_index;
		ind2 = ind2 || HaploBlock.end_index;

		if (ind2 >= MarkerData.getLength()){
			ind2 = MarkerData.getLength() -1
			ind1 = ind2 - HAP_DRAW_LIM;
		}
		else if (ind1 < 0){
			ind1 = 0
			ind2 = HAP_DRAW_LIM;
		}


		MarkerSlider._last_input1_ind = ind1;
		MarkerSlider._last_input2_ind = ind2;

		var top = (MarkerSlider._last_input1_ind / MarkerData.getLength()) * MarkerSlider._config.slider_height,
			bot = (MarkerSlider._last_input2_ind / MarkerData.getLength()) * MarkerSlider._config.slider_height;

		if (MarkerSlider._sl_input1 !== null){
			MarkerSlider._sl_input1.setY(top);
			MarkerSlider._sl_input2.setY(bot);

			MarkerSlider._sl_input1.message.setText( MarkerData.padded[MarkerSlider._last_input1_ind] );
			MarkerSlider._sl_input2.message.setText( MarkerData.padded[MarkerSlider._last_input2_ind] );

			MarkerSlider._last_input1_posy = top + MarkerSlider._rangeline_pos.y;
			MarkerSlider._last_input2_posy = bot + MarkerSlider._rangeline_pos.y;
		}
	},

	// ---- Called by mouseup events
	updateHaploPositions(resizecanvastoo){

		HaploBlock.sta_index = MarkerSlider._last_input1_ind;
		HaploBlock.end_index = MarkerSlider._last_input2_ind;

		Resize.updateHaploScrollHeight( HaploBlock.end_index - HaploBlock.sta_index );
		HaploBlock.redrawHaplos(resizecanvastoo);
	}
}

var MarkerSlider = {

	_instance : null, //markerInstance

	// Updated by functions, instead of continuously checking
	_last_input1_posy : null,
	_last_input2_posy : null,

	_last_input1_ind : null,
	_last_input2_ind : null,
	_rangeline_pos : null,

	// I bar group, and inputs
	_slwin_group : null,
	_sl_input1 : null,
	_sl_input2 : null,


	_config : {
		slideinp_w : 20,
		slider_height : window.innerHeight * 0.75,
		I_slider_extension : 35,
		I_slider_offset : 20/3 //slideinp_w/3
	},

	_style : {
		R_stroke:'red',
		R_strokeWidth: 5,
		R_cap:'round',
		I_stroke:'white',
		I_strokeWidth:1.3,
		I_fontFamily: "monospace",
		I_fontSize: 10,
		I_fontColor: 'red',
		S_fontColor: 'white',
		bevel: 0
	},


	makeVisible: function(visible)
	{

		if (HaploWindow._bottom === null){
			return 0;
			// Haplo has not been initiated yet
			// so slider has no placement
		}

		var slider = MarkerSlider._get();

		if (visible){
			haplo_layer.add(slider);

			SliderHandler.updateInputsByIndex();
			SliderHandler.updateSlide();
		}
		else {
			slider.remove();

			// Fuckit, just delete it for now
			MarkerSlider._slwin_group.destroyChildren();
			MarkerSlider._slwin_group.destroy();
			MarkerSlider._sl_input1.destroyChildren();
			MarkerSlider._sl_input1.destroy();
			MarkerSlider._sl_input2.destroyChildren();
			MarkerSlider._sl_input2.destroy();

			MarkerSlider._instance.destroyChildren();
			MarkerSlider._instance.destroy();

			MarkerSlider._instance = null;

		}
		haplo_layer.draw();
	},

	_get(){

		if (MarkerSlider._instance === null || MarkerSlider._instance.children.length === 0){
			MarkerSlider._instance = MarkerSlider._makeSlider(
			 	 HaploWindow._top.rect.getAbsolutePosition().x
				+HaploWindow._top.rect.getWidth() + 20, 60
			);
		}
		return MarkerSlider._instance;
	},


	__makeInputSlider: function(top = false)
	{
		var ms_c = MarkerSlider._config,
			ms_s = MarkerSlider._style;

		var input_group = new Kinetic.Group({
			x: 0, y: 0,
			draggable: true,
			dragBoundFunc: SliderHandler.inputDragFunc
		});

		var mark_label = new Kinetic.Text({
			x: ms_s.bevel + 3 + ms_c.I_slider_offset*2,
			y: (top?
				-ms_c.I_slider_extension
				:ms_c.I_slider_extension) 
				- HAP_VERT_SPA/2,
			text: "",
			fontFamily: "Arial",
			fontSize: 10,
			fill: ms_s.S_fontColor
		});

		var line_out = new Kinetic.Line({
			points: [
				0, ms_s.bevel,
				ms_c.I_slider_offset + ms_s.bevel,0,
				ms_c.I_slider_offset + ms_s.bevel ,top?
					-ms_c.I_slider_extension
					:ms_c.I_slider_extension,
				ms_s.bevel + ms_c.I_slider_offset*2,top?
					-ms_c.I_slider_extension
					:ms_c.I_slider_extension
					],
			stroke: ms_s.I_stroke,
			strokeWidth:ms_s.I_strokeWidth
		});

		input_group.on('mousedown', function(val){
			input_group.is_being_dragged = true;
		
			function uponMouseUp(){
				if (input_group.is_being_dragged){
					SliderHandler.updateHaploPositions(true);
					MouseStyle.restoreCursor();
					
					input_group.is_being_dragged = false;

					document.removeEventListener("mouseup", uponMouseUp, false);

				};
			}
			document.addEventListener("mouseup", uponMouseUp, false);
		});


		input_group.on('mouseover', 
			top?MouseStyle.changeToVerticalN:MouseStyle.changeToVerticalS
		);
		input_group.add(mark_label);
		input_group.add(line_out);

		input_group.message = mark_label; // Accessors
		input_group.isTop = top;
		input_group.line = line_out;

		return input_group;
	},

	_makeSlider: function(xer,yer)
	{
		var ms_c = MarkerSlider._config,
			ms_s = MarkerSlider._style;

		var marker_slider = new Kinetic.Group({x:xer,y:yer,draggable:true});
		MarkerSlider._instance = marker_slider;

		//Range line
		var rangeline = new Kinetic.Line({
			x:0,y: ms_s.bevel,
			stroke: ms_s.R_stroke,
			strokeWidth: ms_s.R_strokeWidth,
			lineCap: ms_s.R_cap,
			points: [0,0,0,ms_c.slider_height]
		});

		//Highlight
/*		marker_slider.on("mouseover", function(){
			//MouseStyle.changeToGrab();
			rangeline.setStroke('blue');
			haplo_layer.draw();
		});*/

		//Highlight
		marker_slider.on("mouseout", function(){
			MouseStyle.restoreCursor();
			rangeline.setStroke('red');
			haplo_layer.draw();
		});

		rangeline.on("mouseover", MouseStyle.changeToGrab);


		// Update all input positions
		rangeline.on('mousedown mouseout', function (e){
			MouseStyle.changeToMove();
			MarkerSlider._rangeline_pos = this.getAbsolutePosition();
			MarkerSlider._last_input1_posy = MarkerSlider._sl_input1.getAbsolutePosition().y;
			MarkerSlider._last_input2_posy = MarkerSlider._sl_input2.getAbsolutePosition().y;

			SliderHandler.updateSlide();
		});

		// Sliding Window
		MarkerSlider._slwin_group = new Kinetic.Group({
			draggable:true,
			dragBoundFunc: SliderHandler.sliderDragFunc
		});

		MarkerSlider._slwin_group.on('dragmove', function(){
			MouseStyle.changeToMove();
			if (HAP_DRAW_LIM < HAP_MIN_DRAW){
				SliderHandler.updateHaploPositions();
			}
		});
		
		MarkerSlider._slwin_group.on('mousedown', function(){
			MouseStyle.changeToGrab();
			function mouseUpFunc(){
				MouseStyle.restoreCursor();
				SliderHandler.updateHaploPositions();
				document.removeEventListener("mouseup", arguments.callee, false)
				//console.log("ASA")
			}
			document.addEventListener("mouseup", mouseUpFunc, false);
		});

		var	slwin_lin = new Kinetic.Line({
				x:0, y:0,
				stroke: ms_s.I_stroke,
				strokeWidth: ms_s.I_strokeWidth,
				points:[0,0,0,ms_c.slider_height]
			}),

			slwin_tex = new Kinetic.Text({
				x: ms_s.bevel + ms_c.slideinp_w/2,
				y: ms_c.slider_height/2,
				text: "win",
				fontFamily: ms_s.I_fontFamily,
				fontSize: ms_s.I_fontSize,
				fill: ms_s.I_fontColor
			});

		MarkerSlider._slwin_group.add( slwin_lin );
		MarkerSlider._slwin_group.add( slwin_tex );

		// Easy accessors
		MarkerSlider._slwin_group.line = slwin_lin;
		MarkerSlider._slwin_group.message = slwin_tex;

		MarkerSlider._slwin_group.message.on("mouseover", MouseStyle.changeToMove);

		//Inputs
		MarkerSlider._sl_input1 = MarkerSlider.__makeInputSlider(true),
		MarkerSlider._sl_input2 = MarkerSlider.__makeInputSlider(false);
		MarkerSlider._sl_input2.setY(ms_c.slider_height);

		MarkerSlider._rangeline_pos = {x: xer, y:yer};
		MarkerSlider._last_input1_posy = yer;
		MarkerSlider._last_input2_posy = yer + ms_c.slider_height;

		marker_slider.add( rangeline   );
		marker_slider.add( MarkerSlider._sl_input1   );
		marker_slider.add( MarkerSlider._sl_input2   );
		marker_slider.add( MarkerSlider._slwin_group );

		marker_slider.rangeline = rangeline;

		return marker_slider;
	}
}
// ------------ Kinetic globals ------------
var stage = null;

/* All nodes (even across seperate families) share the same node layer,
   but are bound by family_group stored in uniqueGraphOps.getFam(fam_id).group; */

var main_layer = null, 
	haplo_layer = null;

// --- Init Kinetic --//
function makeStage(){

	if (stage !== undefined && stage !== null){
		delete stage;
		delete main_layer;
		delete haplo_layer;
	}

	//if (stage === undefined){
		stage = null;
		main_layer = null;
		haplo_layer = null;
	//}

	stage = new Kinetic.Stage({
		container:'container',
		width: window.innerWidth,
		height: window.innerHeight
	});

	main_layer = new Kinetic.Layer({id:"main"});
	haplo_layer = new Kinetic.Layer({id:"haplo"});

	stage.add(main_layer);
	stage.add(haplo_layer);
}


// ------------ Kinetic Tools --------------
var Graphics = {

	Shapes : {

		addSquare: function(color)
		{
			return new Kinetic.Rect({
				x: 0,
				y: 0,
				width: nodeSize *2,
				height: nodeSize * 2,
				fill: color,
				strokeWidth: 2,
				stroke: default_stroke_color,
				offsetX: nodeSize,
				offsetY: nodeSize
			});
		},

		addCircle: function(color, rad=nodeSize)
		{
			return new Kinetic.Circle({
				x: 0, y: 0, radius: rad,
				fill: color, strokeWidth: 2,
				stroke: default_stroke_color
			})
		},

		addDiamond: function(color){

			var rect = Graphics.Shapes.addSquare(color);
			rect.setRotation(45)
			rect.setScale({x:0.8,y:0.8});

			return rect;
		}
	},

	Lines : {

		changeRLine: function(line, start, end, offset_y = 0, offset_pos = null)
		{
			if (offset_pos !== null)
			{
				start.x += offset_pos.x;
				start.y += offset_pos.y;
				console.log("adding offset", offset_pos)
			}

			try {
				line.setX(start.x);
				line.setY(start.y);
			} catch(e){
				console.log("what is line", line)
				throw new Error(line)
			}

			var diff_x = end.x - start.x,
				diff_y = end.y - start.y;

			var mid_x = diff_x/2,
				mid_y = diff_y/2;


			var	m1    = {	x: 0,			y: (mid_y + offset_y)	},
				m2    = {	x: diff_x,   	y: (mid_y + offset_y)	};

			line.setPoints([0, 0, m1.x, m1.y, m2.x, m2.y, diff_x, diff_y]);

			// SibLine node anchor (where applicable)
			if (typeof line.sib_anchor !== "undefined"){
				var mid_midx = (m1.x + m2.x) / 2,
					mid_midy = (m1.y + m2.y) / 2;

				line.sib_anchor.setX(mid_midx);
				line.sib_anchor.setY(mid_midy);
			}
		},

		/* Used in matelines. Optionally supports a mid-point node -- for a siblines to latch onto */
		changeRLineHoriz: function(line, start, end, offset_pos = null)
		{
			if (offset_pos !== null)
			{
				start.x += offset_pos.x;
				start.y += offset_pos.y;
			}

			line.setX(start.x);
			line.setY(start.y);

			var diff_x = end.x - start.x,
				diff_y = end.y - start.y;

			var mid_x = diff_x/2,
				mid_y = diff_y/2;
			
			var	m1    = {	y: 0,	   x: mid_x	},
				m2    = {	y: diff_y, x: mid_x	};

			line.setPoints([0, 0, m1.x, m1.y, m2.x, m2.y, diff_x, diff_y]);

			// SibLine node anchor (where applicable)
			if (typeof line.sib_anchor !== "undefined"){
				var mid_midx = (m1.x + m2.x) / 2,
					mid_midy = (m1.y + m2.y) / 2;

				line.sib_anchor.setX(start.x + mid_midx);
				line.sib_anchor.setY(start.y + mid_midy);
			}

		//	return {mid1:m1,mid2:m2} /* Useful for spawning of Siblines */
		},

		overlapping_lines : {}, // ypos 

		linesConflictY: function( st, en, ypos)
		{
			var margin = 1;

			// Test for conflict first
			for (var y = ypos - margin; y < ypos; y++)
				if (y in Graphics.Lines.overlapping_lines)
					return true;

			//No conflict, add to line
			for (var y=ypos-5; y < ypos +5; y++)
				Graphics.Lines.overlapping_lines[y] = true

			return false
		},

		addRLine_nonoverlapY: function(start, end, consang)
		{
			var offy = 0;
			while ( Graphics.Lines.linesConflictY( start, end, offy ) ){
				// Add offset to midpoint
				offy -= 1;
			}

			return Graphics.Lines.addRLine_simple(start,end, consang, offy);
		},

		addRLine_simple(start, end, consang, offset_y)
		{
			offset_y = offset_y || 0; // default

			var line = new Kinetic.Line({
				stroke: 'black',
				strokeWidth: 2
			});

			if (consang){
				line.attrs.shadowColor = 'black';
				line.attrs.shadowBlur = 0;
				line.attrs.shadowOffsetY = -nodeSize/3;
				line.attrs.shadowOpacity = 1;
			}
			Graphics.Lines.changeRLine(line, start, end, offset_y);

			return line;
		},

		addRLine: function(fam_group, start, end, consang)
		{
			var line = Graphics.Lines.addRLine_simple(start,end,consang)

			fam_group.add(line);
			return line;
		}
	},



	// ------- Family Functions --------------
	Pedigree : {

		addFamily: function(fam_id, sx, sy){

			var g = new Kinetic.Group({
				x: sx, y:sy,
				draggable: true,
				id: fam_id
			});

			var bounds = new Kinetic.Rect({
				x: sx, y:sy,
				draggable : false,
				stroke: "red",
				strokeWidth: 1
			});

			g._boundsrect = bounds;
			g.add(bounds);

			var t = new Kinetic.Text({
				x: 50,
				text: ""+fam_id+"",
				fontFamily: "Arial",
				fontSize: 18,
				fill: 'black'
			})
			g.fam_title_text = t;
			g.add(t);
			g.id = fam_id;

			t.on('mouseover', function(){
				MouseStyle.changeToGrab();
				t.setFill('red');
				g._boundsrect.show();
				main_layer.draw();
			});


			t.on('mousedown', function(){
				MouseStyle.changeToMove();
				g.setScale({x:0.95, y:0.95});
				familyDraw.active_fam_group = g;
				g.moveToTop();
			})

			t.on('mouseout mouseup', function(){
				MouseStyle.restoreCursor();
				g.setScale({x:1, y:1});
				t.setFill('black');
				g._boundsrect.hide();
				main_layer.draw();
			})


			main_layer.add(g);
			return g;
		},

		addPerson : function(person, fam_group,  t_x, t_y)  //positions relative to family group
		{
			var gender = person.gender,
				id = person.id,
				aff = person.affected,
				name = person.name || null;


			//Add Shape and text Text
			var makeshape = function pedigreeShape(){
				var shape = 0;

				switch(gender){
					case 0: (function addAmbig() { shape = Graphics.Shapes.addDiamond(col_affs[aff]) })(); break;
					case 1: (function addMale()  { shape = Graphics.Shapes.addSquare (col_affs[aff]) })(); break;
					case 2: (function addFemale(){ shape = Graphics.Shapes.addCircle (col_affs[aff]) })(); break;
					default:
						console.assert(false, "No gender for index "+gender);
				}
				return shape;
			};


			var label = new Kinetic.Group({
				x: - (""+id+"").length*3,
				y: nodeSize + 10
			});

			label.add(new Kinetic.Rect({
				fill: 'white',
				opacity: 0.8,
				y: - nodeSize/2,
				width: (""+id+"").length*6,
				height: 8
			}));

			var texts = new Kinetic.Text({
				text: id,
				fontSize: 'Calibri', //change to global setting
				fill: default_stroke_color
			});
			label.add(texts);


			// Name
			if (name !== null)
			{
				var namlen = name.length,
					offY = (nodeSize*4) - 2,
					offX = ((namlen/2) - (namlen%2)) * 4;

				label.add(new Kinetic.Rect({
					fill: 'white',
					opacity: 0.8,
					y: - nodeSize/2,
					width: name.length*6,
					height: 8,
					offsetY: offY,
					offsetX: offX // Center, then 3px for each letter

				}));

				label.add(new Kinetic.Text({
					text: name,
					fontSize: 'Calibri',
					fill: default_stroke_color,
					offsetY: offY,
					offsetX: offX // Center, then 3px for each letter
				}));
			}

			//Each person is their own group of inter-related ojects
			var group = new Kinetic.Group({
				x: t_x, y: t_y,
				draggable: true,
				id: fam_group.attrs.id+"_"+id
			});

			var gfx = makeshape();

			group.add(gfx).add(label);

			group.id = id;
			group.gfx = gfx;

			//On drag do
			group.on('dragmove', function(e){
				// Update last touched group
				familyDraw.active_fam_group = fam_group;

				var x = e.target.attrs.x;
				var	y = e.target.attrs.y;

				if (Keyboard.isShiftDown()){
					e.target.dragBoundFunc
					main_layer.draw();
					return 0;
				}
				
				//Snap-to-grid  -- relative to parent (fam_group)
				this.setX( (Math.floor(x/grid_rezX)*grid_rezX) );
				this.setY( (Math.floor(y/grid_rezY)*grid_rezY) );


		//		if (familyMapOps.famExists(fam_group.id)){
					redrawNodes(id, fam_group.attrs.id, true);
		//		}
			});

			group.on("dragend", function(){
				Graphics.Pedigree.updateFamBoundsRect(fam_group);
				redrawNodes(id, fam_group.attrs.id, true);
			});

			//Assume addFamily has already been called
			fam_group.add(group);
			return group;
		},

		updateFamBoundsRect: function(fgroup)
		{
			var new_bounds = FamSpacing.getBoundsForFamily(fgroup),
				new_rect = new_bounds.rect,
				minpos = new_bounds.minpos;

			var buffer = nodeSize * 2;


			fgroup._boundsrect.setX(minpos.x - buffer);
			fgroup._boundsrect.setY(minpos.y - buffer);
			fgroup._boundsrect.setWidth(new_rect.getWidth() + 2*buffer);
			fgroup._boundsrect.setHeight(new_rect.getHeight() + 2*buffer);
		}
	}
}

// Global graphic styles
function addWhiteRect(props, color_override)
 {
	color_override = color_override || 'white'

	props.fill = color_override;
	props.stroke = 'black';
	props.strokeWidth = 2;
	props.cornerRadius = 10;
	return new Kinetic.Rect(props);
}


/** This class exists purely as a class with a play() function that acts
    similar to Kinetic.Tween but acts instantaneously when played (for slow machines) **/

class CustomTweenClass
{
	constructor(props)
	{
		this.node = props.node;
		this.finishCallback = props.onFinish || null;

		for (var pr in props)
		{
			if (
				(pr === "node")
			 || (pr === "onFinish")
			 || (pr === "duration")
			){
				continue;
			}
			this.node.attrs[pr] = props[pr];
//			console.log(this.node, props[pr])
		}
	}

	play(){
		if (this.finishCallback !== null){
			setTimeout(this.finishCallback, 100);
		}
	}
}


function kineticTween(props)
{
	props.easing = props.easing || Kinetic.Easings.EaseIn;
	props.duration = props.duration || 0.8;

	if (userOpts.fancyGraphics){
		return new Kinetic.Tween(props);
	}

	return new CustomTweenClass(props);
}




function addExitButton(center, callback, color_level = 0)
{

	var colors = ['#555', '#777', '#aaa', '#ddd'];
	if (color_level >= colors.length){
		color_level = 0;
	}


	var cross_diam = 20;
	var cross_rad = cross_diam/2;

	var rect = new Kinetic.Rect({
		x: -cross_rad,
		y: -cross_rad,
		width: cross_diam,
		height: cross_diam,
		fill: colors[color_level],
		stroke: 'black',
		strokeWidth: 1.5,
		cornerRadius: 3
	});

	var crossUp = new Kinetic.Line({
		stroke: 'white',
		strokeWidth: 1
	});

	var crossDown = new Kinetic.Line({
		stroke: 'white',
		strokeWidth: 1
	});

	var cross_buff = cross_rad - 5;

	crossUp.setPoints([-cross_buff,-cross_buff,
						cross_buff, cross_buff]);

	crossDown.setPoints([-cross_buff, cross_buff,
						  cross_buff,-cross_buff]);

	var group = new Kinetic.Group({
		x: center.x,
		y: center.y
	});

	group.on('click', callback);

	group.add( rect );
	group.add( crossUp );
	group.add( crossDown );

	return group;
}

// Set by cssfuncs/buttonmodes/general.js
// -- but good to keep it here

var ModeTracker = {
	
	currentMode : null,

	modes : {

		pedcreate: 0,
		haploview: 1,
		selection: 2,
		comparison: 3,
		homselection: 4,
		homology: 5
	},


	setMode(mode)
	{
		if (mode in ModeTracker.modes){
			ModeTracker.currentMode = ModeTracker.modes[mode];
			return 0;
		}
		console.log("mode", mode);
		throw new Error("invalid mode");
	}
}
// TODO: Update node_map to point at unique_graph_obs.nodes, and retrieve family name

var edgeAccessor = {

	_UUID: function (type, from_id, to_id){
		// m Father_id Mother_id   // MAYBE UNITE m and p?
		// p Father_id Mother_id
		// c parentline child_id

		// straightforward to find childline from two parents
		// (e.g any keys starting with "c m F_id M_id"
		return type+":"+from_id+"-"+to_id;
	},

	childlineID: function(mateline_id, child_id){
		return this._UUID('c', mateline_id, child_id)
	},

	matelineID: function(father_id , mother_id){
		return this._UUID('m', father_id, mother_id)
	}
}



var updateGraph = {


	childline: function(family_id, person_id, parents_mateline_id = -1)
	{
		if (parents_mateline_id === -1){
			var person_node = familyMapOps.getPerc(person_id, family_id);

			if ((person_node.father === 0) || (person_node.mother === 0)){
				//No parent mateline, nothing to update
				return 0;
			}

			parents_mateline_id = edgeAccessor.matelineID(person_node.father.id, person_node.mother.id);
		}

		var childline_id = edgeAccessor.childlineID(parents_mateline_id, person_id),
			childline    = uniqueGraphOps.getEdge(childline_id, family_id).graphics,
			mateline     = uniqueGraphOps.getEdge(parents_mateline_id, family_id).graphics,
			mateline_ps  = mateline.getPoints();

//			childline_ps = childline.getPoints();
//			var mid_xx = childline_ps[0] + childline.getX(),
//			  	mid_yy = childline_ps[1] + childline.getY();

		var mid_xx = (mateline_ps[2] + mateline_ps[4])/2 + mateline.getX(),
			mid_yy = (mateline_ps[3] + mateline_ps[5])/2 + mateline.getY();

		var person_graphics = uniqueGraphOps.getNode(person_id, family_id).graphics;

//		console.log("childline", childline);

		Graphics.Lines.changeRLine( childline, {x:mid_xx, y:mid_yy}, person_graphics.getPosition());
	}
}



function redrawNodes(pers_id, fam_id, drawLinesToo)
{
	var pers      = familyMapOps.getPerc(pers_id, fam_id),
		fam_gfx   = uniqueGraphOps.getFam(fam_id),
		node_map  = fam_gfx.nodes,
		edge_map  = fam_gfx.edges,
		npers     = node_map[pers_id],
		npers_pos = npers.graphics.getPosition(),
		per_isMale= (pers.gender == PED.MALE);


	// Move mates vertically

	// Stagger mate's vertically to please the world
	var staggerY_amount = grid_rezY/2,
		use_stagger = false; //pers.mates.length > 1;

	for (var m=0; m < pers.mates.length; m++){
//		console.log(pers_id, "mate=", pers.mates[m].id )
		var mate = pers.mates[m],
			nmate = node_map[mate.id].graphics,
			nmate_pos = nmate.getPosition();

		if (use_stagger){
			nmate.setY(npers_pos.y + (staggerY_amount)); // bind y only
		}
		else {
			nmate.setY(npers_pos.y);
		}

		var ch_x = npers_pos.x + (nodeSize*2); 		// Offset stops shapes from intersecting

		//Mate is on left
		if (ch_x > nmate_pos.x){
			if ((ch_x - nmate_pos.x) < horiz_space ){
				nmate.setX(ch_x - horiz_space);
			}

		nmate_pos = nmate.getPosition() // update pos after change


			// -- Keep this out, otherwise you can never swap around parents
			//		else
			//			if ((nmate_pos.x-npers_pos.x) < buffer)
			//				nmate.setX(npers_pos.x + buffer+2);
		}
		//Update mate's mate's
		for (var mm=0 ; mm < mate.mates.length; mm++){
			var matemate_id  = mate.mates[mm].id;

			if (matemate_id != pers_id){
				var nmatemate     = node_map[matemate_id].graphics,
					nmatemate_pos = nmatemate.getPosition();

				nmatemate.setY(npers_pos.y);
				nmatemate_pos = nmatemate.getPosition(); // update
			}
		}


		if (drawLinesToo){
			var male_id   = (per_isMale)?pers.id:mate.id,
				female_id = (per_isMale)?mate.id:pers.id;

			// -- mateline, and update it's pos
			var mateline_id = edgeAccessor.matelineID(male_id, female_id),
				mateline = edge_map[mateline_id].graphics;

			var s1_x = npers_pos.x, s1_y = npers_pos.y,
				e1_x = nmate_pos.x, e1_y = nmate_pos.y;

			Graphics.Lines.changeRLineHoriz(mateline, npers_pos, nmate_pos);

			//  -- update childlines attached to it
			var childkey_starting = "c:"+mateline_id;   //Look for all childnodes starting with

			for (var key in edge_map){
				if (key.lastIndexOf(childkey_starting,0) === 0) //startsWith implementation
				{
					var find_child_id = key.split('-'),
						child_id = parseInt(find_child_id[find_child_id.length - 1].trim());

					updateGraph.childline(fam_id, child_id);
				}
			}

			// -- mate's childline
			updateGraph.childline(fam_id, mate.id);	


			// -- mate's mate's mateline
			for (var mm=0 ; mm < mate.mates.length; mm++){
				var matemate_id = mate.mates[mm].id,
					matemate_gfx = node_map[matemate_id].graphics;

				var male_id   = (mate.gender===PED.MALE)?mate.id:matemate_id,
					female_id = (mate.gender===PED.FEMALE)?mate.id:matemate_id;

				if (matemate_id != pers_id){

					var mateline_id = edgeAccessor.matelineID(male_id, female_id),
						mateline = edge_map[mateline_id].graphics;

//					var s1_x = mate.getX(), 	s1_y = mate.getY(),
//						e1_x = matemate.getX(), e1_y = matemate.getY();

					Graphics.Lines.changeRLineHoriz(mateline, nmate.getPosition(), matemate_gfx.getPosition());

					// And now their children...!
					var child_edges = uniqueGraphOps.findAllOffspringEdges(fam_id, male_id, female_id);

					for (var cc=0; cc < child_edges.length; cc++){
						var ops = child_edges[cc].split('-');
						var child_id = ops[ops.length-1];

						updateGraph.childline(fam_id, child_id);
					}

				}
			}
		}
	}

	// NEED TO UPDATE GENERATION)GRID_IDS

	//If last generation, move all sibs
	if (GlobalLevelGrid.exists(fam_id))
	{
		var last_gen = GlobalLevelGrid.getlastgeneration(fam_id);

		if (last_gen.indexOf(pers_id)!== -1)
		{
			for (var c=0; c < last_gen.length; c++){
				var sib_id = last_gen[c],
					n_sib = node_map[sib_id].graphics;

				n_sib.setY(npers_pos.y);

				if (drawLinesToo){ //Update childlines			
					updateGraph.childline(fam_id, sib_id);
				}
			}
		}
	}


	//Update own childnode.
	if (drawLinesToo && (pers.father != 0 && pers.mother !=0))
	{
		updateGraph.childline(fam_id, pers.id);	
	}
}


// Performs redrawNodes upon all
function touchlines()
{
	familyMapOps.foreachperc(function( perid, famid){

		//console.log("touch", perid, famid);

		var e = new CustomEvent("dragmove", {target: {attrs: {x:10, y:10}}}),
			o = uniqueGraphOps.getFam(famid).nodes[perid].graphics;

		o.dispatchEvent(e);
	});
}


function linesShow(fid, show){
	//Hide lines
	var edges = uniqueGraphOps.getFam(fid).edges;
	for (var eid in edges)
		if (show){
			edges[eid].graphics.show();
			edges[eid].graphics.setZIndex(-21);
		}
		else
			edges[eid].graphics.hide();

	main_layer.draw();
}




var GlobalLevelGrid = {

	_map : {}, //fid --> [[gen1], [gen2]]

	clear: function(){
		GlobalLevelGrid._map = {}
	},

	insertGrid: function(fid, grid = null)
	{
		if (!(fid in GlobalLevelGrid._map)){

			if (grid === null){
				console.log("GLG: populating null grid");
				grid = GlobalLevelGrid.__populate(fid);
			}

			GlobalLevelGrid._map[fid] = grid;
			return true;
		}
		return false;
	},

	refreshGrid: function(fid){
		console.log("refreshing");
		if (!(GlobalLevelGrid.insertGrid(fid))){
			console.log("grid exists");
			GlobalLevelGrid.updateGrid(fid,
				GlobalLevelGrid.__populate(fid))
		}
	},

	updateGrid: function(fid, grid){
		console.log("GLG: update", fid);
		GlobalLevelGrid._map[fid] = grid;
	},

	exists: function(fid){
		return fid in GlobalLevelGrid._map;
	},

	getGrid: function(fid){
		if (fid in GlobalLevelGrid._map){
			return GlobalLevelGrid._map[fid];
		}
		return false;
	},

	deleteGrid: function(fid){
		if (fid in GlobalLevelGrid._map){
			delete GlobalLevelGrid._map[fid]
			return true;
		}
		return false;
	},

	__populate: function(fid, callback1 = 0, callback2 = 0){
		var root = familyMapOps.getFirst(fid);

		var level_grid = new LevelGrid(root, callback1, callback2);
		return level_grid.getGrid();
	},

	foreachfam: function(callback){
		for (var fid in GlobalLevelGrid._map){
			var grid = GlobalLevelGrid._map[fid];
			callback(grid, fid);
		}
	},

	foreachgeneration: function(fid, callback){
		var grid = GlobalLevelGrid.getGrid(fid)

		for (var g=0; g < grid.length; g++){
			var individuals = grid[g];
			callback(individuals, g);
		}
	},

	numGens: function(fid){
		var grid = GlobalLevelGrid.getGrid(fid);
		return grid.length;
	},

	getlastgeneration: function(fid){
		var grid = GlobalLevelGrid.getGrid(fid),
			last_gen = grid.length - 1;

		return grid[last_gen];
	}
}



/* Family Specific */
class LevelGrid {

	constructor(root_indiv, callback1 = 0, callback2 = 0)
	{
		this._map = {};
		this._alreadytraversed = {};

		this._callback1 = callback1;
		this._callback2 = callback2;

		this._recurseLevels(root_indiv, 0);
	}

	getGrid(){
		if (this._map !== {}){
			return map2orderedArray(this._map);
		}
		console.log("Grid not populated")
		return false;
	}

	_recurseLevels(perc, level)
	{
		if (perc === 0){
			return;
		}

		if (perc.id in this._alreadytraversed){
			return;
		}
		this._alreadytraversed[perc.id] = 1;
		//console.log(perc.id, level);
		
		// Used by init_graph
		if (this._callback1 !== 0) {this._callback1(perc);}

		if (!(level in this._map)){
			this._map[level] = [];
		}

		this._map[level].push( perc.id );

		var lg = this;

		perc.foreachmate(function(mate){
			lg._recurseLevels(mate, level);

			perc.foreachchild(mate, function(child){
				lg._recurseLevels(child, level + 1);
			});
		});

		// Parents
		this._recurseLevels( perc.mother, level - 1);
		this._recurseLevels( perc.father, level - 1);

		// Used by init_graph
		if (this._callback2 !== 0) {this._callback2(perc);}

		return;
	}
}
/* Family map must be populated and connected before a level map can ge generated */

/** A level grid is made to facilitate determining which generations individuals belong to
    This class hooks into Level Grid */

class GraphicsLevelGrid {


	constructor(fid, graphicsMap = null){
		this.graphics_map = graphicsMap;	
		this._populate(fid);
	}

	getMap(){
		return this.graphics_map;
	}


	_populate(fid){

		/* Not vars because addTrio uses them */
		this._unique_edges_fam = {};
		this._unique_nodes_fam = {
			0 : {
				graphics: null
			}
		};
	
		/* LevelGrid generates a level map whilst using
		   graphic callbacks */
		var that = this;

		var level_grid = GlobalLevelGrid.__populate(fid, 
			function cb1(perc){
				// Populates this._unique_nodes_fam
				that.insertNode(perc.id);
			},
		
			function cb2(perc){
				if (perc.mother != 0 && perc.father != 0){
					// Populates this._unique_edges_fam
					that.addTrioEdges(perc.mother, perc.father, perc);
				}
			}
		);

//		console.log(fid, level_grid);

		GlobalLevelGrid.insertGrid(fid, level_grid);

		var uniq_map = {
			nodes: this._unique_nodes_fam,
			edges: this._unique_edges_fam
		};

		this.graphics_map = uniq_map;
	}


	addTrioEdges(moth, fath, child){
		//= Assume all indivs are != 0
		var u_matesline = edgeAccessor.matelineID(fath.id, moth.id),
			u_childline = edgeAccessor.childlineID(u_matesline, child.id);

		//= Edges
		this.insertEdges(u_matesline, fath.id, moth.id, 0);
		this.insertEdges(u_childline, u_matesline, child.id, 2);

		//= Nodes
		this.insertNode(moth.id);
		this.insertNode(fath.id);
		this.insertNode(child.id); //Already in
	}


	insertNode(id){
		if (!(id in this._unique_nodes_fam))
		{
			var graphicsObj = null;
			
			// If node already has graphics, reinsert it into new map
			if (this.graphics_map !== null ){
				graphicsObj = this.graphics_map.nodes[id];
			}

			this._unique_nodes_fam[id] = {
				graphics:graphicsObj,		// if being read from pedfile, set later by placePerp
			 };
		}
		else{
			// Id exists, but perhaps not graphics? reinsert into new map
			if (this.graphics_map !== null ){

				var graphicsObj = this.graphics_map.nodes[id];
				this._unique_nodes_fam[id].graphics = graphicsObj;
			}
		}
	}

	insertEdges(id, start_join, end_join, type, 
		consang = false,
		mapper = this._unique_edges_fam,
		graphicsObj = null){

		if (!(id in mapper))
		{
			mapper[id] = {
				graphics:graphicsObj,			//set later by placePerp
				type:type,
				start_join_id: start_join,      //Note: IDs, not positions
				end_join_id: end_join,
				consangineous: consang 				// Consangineous
			}
		}
	}
}


var FamSpacing = {


	init(offset, max_width, debug = false){
		max_width = max_width || stage.getWidth();
		offset = offset || 0;

		var placements = FamSpacing.__getFamBounds();

		FamSpacing.__performPacking(placements, max_width, debug);
		FamSpacing.__setDerivedPositions(placements, offset);
	},

	// Accessible to node drag functions too
	getBoundsForFamily: function(fgroup){
		// Get group width
		var min_x = 999999999, min_y = 9999999,
			max_x = 0, max_y = 0;

		var title_y = fgroup.fam_title_text.getY();

		uniqueGraphOps.foreachnode(function(nid, node)
		{
			var xer = node.graphics.getX(),
				yer = node.graphics.getY()

			var l_offs = nodeSize,
				r_offs = l_offs;

			if (min_x > xer - l_offs){ min_x = xer - l_offs; }
			if (max_x < xer + r_offs){ max_x = xer + r_offs; }		
			if (min_y > yer - nodeSize){ min_y = yer - nodeSize; }		
			if (max_y < yer + nodeSize){ max_y = yer + nodeSize; }
		}, fgroup.id);

//		var min_y = title_y

		var pos = fgroup.getAbsolutePosition();
		var w = max_x - min_x,
			h = max_y - min_y;

		var rect = new Kinetic.Rect({
			x:min_x + pos.x,
			y:min_y + pos.y,
			stroke:"red",
			strokeWidth: 2,
			width: w,
			height: h
		});

		// Move out of way for now
		rect.setX(-1000);
		rect.setY(-1000);

		main_layer.add(rect);

		return {rect: rect, minpos: { x: min_x, y: min_y}};
	},


	__getFamBounds : function()
	{
		var fam_placements = {}; // fid -> [position, width]

		uniqueGraphOps.foreachfam(function(fid,fgr)
		{
			fgr.group.hide();
			fam_placements[fid] = FamSpacing.getBoundsForFamily(fgr.group);

		});
		return fam_placements;
	},


	__performPacking : function(fam_placements, max_width, debug = false)
	{
		var start_x = nodeSize,
			start_y = 50;

		var total_width = max_width,
			ma_rect;

		if (debug){
			ma_rect = new Kinetic.Rect({
				x:total_width,
				y:0,
				stroke:"blue",
				strokeWidth: 2,
				width: 5,
				height: stage.getHeight()
			});
			
			main_layer.add(ma_rect);
			main_layer.draw();
		}

		for (var group_id in fam_placements)
		{
			var group = fam_placements[group_id].rect;

			group.setX( start_x );
			group.setY( start_y );

			while (true) {
				var any_collision = false;

				for (var second_id in fam_placements)
				{
					if (group_id === second_id){
						continue;
					}

					var second_group = fam_placements[second_id].rect;

					if (FamSpacing.__colliding(group, second_group)){
						any_collision = true;
						break;
					}
				}

				if (any_collision){
					// shift left;
					start_x += nodeSize * 3;
					if (start_x + group.getWidth()*4/5 > total_width)
					{
						start_x = nodeSize * 5;
						start_y += nodeSize * 4;
					}
					group.setX(start_x);
					group.setY(start_y);

					if (debug){
						main_layer.draw();
						debugger;
					}
					continue;
				}

				// No collision after testing all -- final position found.
				break;
			}
		}

		if (debug){
			ma_rect.destroy();
		}

	},


	__setDerivedPositions: function(fam_placements, offsetT = 0)
	{
		for (var g_id in fam_placements)
		{
			var group = fam_placements[g_id].rect,
				offset  = fam_placements[g_id].minpos,
				offx = offset.x,
				offy = offset.y,
				fgroup = uniqueGraphOps.getFam(g_id).group;

			fgroup.setX( group.getX() + offsetT - offx );
			fgroup.setY( group.getY() + offsetT - offy );
			fgroup.show();

			//Remove rects after ananlyis
			group.destroy();
		}
	},

	__colliding: function(r1,r2){
	 	var spacing = nodeSize * 2 ;

		var rect1 = {x: r1.getX(), y: r1.getY(), 
			width: r1.getWidth() + spacing, 
			height: r1.getHeight() + spacing
		}
		var rect2 = {x: r2.getX(), y: r2.getY(), 
			width: r2.getWidth() + spacing, 
			height: r2.getHeight() + spacing
		}

		if (rect1.x < rect2.x + rect2.width &&
	   		rect1.x + rect1.width > rect2.x &&
	   		rect1.y < rect2.y + rect2.height &&
	   		rect1.height + rect1.y > rect2.y) {
	    	
	    	return true;
		}
	    return false;
	}
}



/*
function spaceFamGroups2(){

	var fam_placements = {}; // fid -> [position, width]

	familyMapOps.foreachfam(function(fid){

		// Get group width
		var min_x = 999999999, min_y = 9999999,
			max_x = 0, max_y = 0;

		var famgfx = uniqueGraphOps.getFam(fid),
			fgroup = famgfx.group,
			title_pos = fgroup.fam_title_text.getX(),
			title_wid = fgroup.fam_title_text.getWidth();

		uniqueGraphOps.foreachnode(function(nid, node)
		{
			var xer = node.graphics.getX(),
				yer = node.graphics.getY()

			var l_offs = nodeSize,
				r_offs = l_offs;

			if (min_x > xer - l_offs){ min_x = xer - l_offs; }
			if (max_x < xer + r_offs){ max_x = xer + r_offs; }
			
			if (min_y > yer - nodeSize){ min_y = yer - nodeSize; }		
			if (max_y < yer + nodeSize){ max_y = yer + nodeSize; }

			if (fid === "1001"){
				console.log(fid, min_x, max_x)
			}

		}, fid);

		var group_pos = fgroup.getAbsolutePosition(),
			group_width = max_x - min_x,
			group_height = max_y - min_y;

		fam_placements[fid] = [fgroup, {x : {min:min_x, max:max_x}, y: {min: min_y, max: max_y}}, group_width, group_height, title_pos];
		console.log(fid, fam_placements[fid])
	});

	var start_x = nodeSize * 5,
		start_y = 50;

	var total_width = stage.getWidth(),
		last_w = 0;

	for (var f_id in fam_placements){
		var pack = fam_placements[f_id];

		var	group = pack[0],
			pos = pack[1],
			w = pack[2],
			h = pack[3],
			title_pos = pack[4]

		
		var new_x = start_x - pos.x.min;

		group.setX( new_x );
		group.setY( start_y );

		group.hit = function(res){
			console.log("HIT", res);
		}

		if (start_x + w > 500){
			start_x = 10;
			start_y = h + nodeSize*2;
		}

		start_x += w + nodeSize*4;

		group.add( new Kinetic.Rect({
			x:pos.x.min,
			y:0,
			stroke:"red",
			strokeWidth: 2,
			width: w,
			height: h + pos.y.min
		}));


		last_w = w;
	}
}
*/
/// DO NOT BOTHER TO CHAIN THE END OF ONE TWEEN TO THE START OF ANOTHER
// the onFinish function in the tweening stage executes only after a node
// has been launched, and it does not wait for it to finish.
//
// Rely on the more or less precise timings set by the setTimeout wrapper.


var FancyGraphics = {

	__start : null,
	__step : 50,
	__fromLeft : false,

	__initial : {
		scale : 50,
		x: -100,
		y: 2000,
		duration: 0.5
	},


	init: function()
	{
		//Reset
		FancyGraphics.__start = 0;
		FancyGraphics.__fromLeft = Math.round(Math.random()) === 0;
		FancyGraphics.__initial.y *= FancyGraphics.__fromLeft?-1:1;

		//Init
		FancyGraphics.__placeFamText();
		FancyGraphics.__placeNodes();
		FancyGraphics.__placeLines();
	},


	__place: function(graphics, step)
	{
		var positions = {
			x: graphics.getX(),
			y: graphics.getY()
		}

		var initial = FancyGraphics.__initial;

		graphics.setScale({x:initial.scale, y:initial.scale});
		graphics.setX(initial.x);
		graphics.setY(initial.y);
		graphics.moveToTop();

		setTimeout(function(){
			kineticTween({
				node:graphics,
				scaleX:1,
				scaleY:1,
				x : positions.x,
				y : positions.y,
				duration: initial.duration,
				easing: Kinetic.Easings.StrongEaseOut
			}).play();
		
		}, FancyGraphics.__start);

		// Stagger placement interval
		FancyGraphics.__start += step;
	},


	__placeFamText(){
		uniqueGraphOps.foreachfam(function(fid,fgroup){
			FancyGraphics.__place(
				fgroup.group,
				FancyGraphics.__step * 2
			);
		});
	},

	__placeNodes(){
		FancyGraphics.__start += 500; // pause

		uniqueGraphOps.foreachnode(function(pid,fid,node){
			node.graphics.show()
			FancyGraphics.__place(
				node.graphics,
				FancyGraphics.__step
			);
		});
	},


	__placeLines(){
		FancyGraphics.__start += 200; // pause

		var show_interval = FancyGraphics.__start + FancyGraphics.__initial.duration*1000;

		// Hide all edges until nodes are placed
		uniqueGraphOps.foreachedge(function(eid,fid,edge){
			edge.graphics.hide();

/*			setTimeout(function(){
				kineticTween({
					node:edge.graphics,
					visible: true,
					duration: 3
				});
			}, show_interval);*/
		});

		// Final touch
		setTimeout(function(){
			uniqueGraphOps.foreachedge(function(eid,fid,edge){
				edge.graphics.show();
			});

			touchlines();
			main_layer.draw();
		},
		show_interval);
	}
}
	



var SelectionGraphics = {

	// Shared with homology_selection.js
	// Replicate existing objects with bounding square
	addBounder: function(pos, key, main_layer_yes, hasHaplo){

		if (hasHaplo === null){
			var fid_id = key.split('_').map(x => Number(x));
			hasHaplo = familyMapOps.getPerc(fid_id[1], fid_id[0]).hasHaplo();
		}

		var rect = SelectionGraphics._addInvisibleOrangeBox(pos);
		rect.on('click', function(){


			if (!hasHaplo){
				utility.notify("Error", "No haplotypes for individual "+key.split('_')[1]);
			
			} else{
				//Toggle selection
				this.setStrokeEnabled(!SelectionMode._items[key].selected);

				SelectionMode._items[key].selected = !SelectionMode._items[key].selected
				if (main_layer_yes) main_layer.draw();
				else haplo_layer.draw();
			}
		});

		// Disabled externally after HomologySelection submit
		rect.on('mouseover', MouseStyle.changeToPointer);
		rect.on('mouseout mouseup', MouseStyle.restoreCursor);

		return rect;
	},

	addInvisibleBounder: function(pos, fam_id, main_layer_yes){
		var rect = SelectionGraphics._addInvisibleOrangeBox(pos, 20);

		rect.on('click', function(){
			// Select fam
			SelectionMode.selectFam(fam_id);

			if (main_layer_yes) main_layer.draw();
			else haplo_layer.draw();
		});

		return rect;
	},


	nextEmptySlot: function(fam_id)
	{
		var max_pos = {x:-grid_rezX, y:-grid_rezY};

		familyMapOps.foreachperc(function(perc_id){
			var node = uniqueGraphOps.getNode(perc_id, fam_id ).graphics,
				pos = node.getPosition();

			var new_pos = {
				x: Math.floor( pos.x / (2*grid_rezX)) * 2 * grid_rezX,
				y: Math.floor( pos.y / (2*grid_rezY)) * 2 * grid_rezY
			};

			if (new_pos.x > max_pos.x){ max_pos.x = new_pos.x;}
			if (new_pos.y > max_pos.y){ max_pos.y = new_pos.y;}

		}, fam_id);

		// Add one to Y
		max_pos.y += 2* grid_rezY;

		return max_pos;
	},



	_addInvisibleOrangeBox: function(pos, radius){
		var border_offs = 3,
			radius = radius || nodeSize;

		return new Kinetic.Rect({
			x: pos.x - radius - border_offs,
			y: pos.y - radius - border_offs,
			width: (radius *2) + 2*border_offs,
			height: (radius * 2) + 2*border_offs,
			strokeAlpha: 0.5,
			strokeWidth: 3,
			strokeEnabled: false,
			stroke: 'orange'
		});
	}
}

var SelectionMode = {

	_ids_map : {}, // Generational map
	_ids 	 : {}, // Just a map of ids
	_items   : {},

	_select_group : null,
	_background : null,
	_exit: null,

	toggle_selection_affecteds : null,
	toggle_selection_all: null,


	// use this instead of "destroy" for general mode use-cases
	quit: function(){
		HaploWindow.destroy();
		SelectionMode.destroy();
		ButtonModes.setToHaploView()
	},

	destroy: function stopSelectionMode()
	{
		if (HomologyMode._active){
			HomologyMode.quit();
		}

		SelectionMode._select_group.destroyChildren();
		SelectionMode._select_group.destroy();
		SelectionMode._background.destroy();
		
		if (SelectionMode._exit !== null){
			SelectionMode._exit.destroy();
		}

		// Reset all
		SelectionMode._ids_map = {}
		SelectionMode._ids = {};
		SelectionMode._items = {}

		//Delete zoom
		MarkerSlider.makeVisible(false);

		haplo_layer.draw();
		main_layer.draw();
	},

	init: function startSelectionMode()
	{
		SelectionAction.reset();
		ButtonModes.setToSelectionMode()

		// Main selection layer
		SelectionMode._select_group = new Kinetic.Group({
			x:0, y:0,
			width: stage.getWidth(),
			height: stage.getHeight()
		});


		SelectionMode._background = new Kinetic.Rect({
			x:0, y:0,
			width: stage.getWidth(),
			height: stage.getHeight(),
			fill: 'black',
			strokeWidth: 0,
			opacity: 0.1
		})

		SelectionMode._select_group.add( SelectionMode._background );


		uniqueGraphOps.foreachfam(function(fid){
			var text_butt = uniqueGraphOps.getFam(fid).group.fam_title_text;
			var text_bounder = SelectionGraphics.addInvisibleBounder(
				text_butt.getAbsolutePosition(), fid, true
			);

			SelectionMode._select_group.add(text_bounder)

			var all_no_haplo = true;

			uniqueGraphOps.foreachnode(function(node_id, fid){

				if (node_id != 0)
				{
					var key = fid+"_"+node_id

					var hasHaplo = familyMapOps.getPerc(node_id, fid).hasHaplo();
					//console.log("HasHaplo:", hasHaplo, node_id, fid)

					if (hasHaplo){
						all_no_haplo = false;
					}

					var gfx = uniqueGraphOps.getFam(fid).nodes[node_id].graphics,
						pos = gfx.getAbsolutePosition(),
						bounder = SelectionGraphics.addBounder(pos, key, true, hasHaplo);

					gfx.attrs.draggable = false;

					// By default not enabled
					SelectionMode._items[key] = {
						box:bounder,
						selected:false,
						graphics: gfx
					};
					SelectionMode._select_group.add(bounder);
				}
			});

			if (all_no_haplo){
				utility.notify("Error", "No haplotypes detected",4);
				SelectionMode.toggle_selection_all = false;
				SelectionMode.quit();
			}
		});

		// Exit button
		SelectionMode._exit = addExitButton(
			{x: 20, y: 20},
			SelectionMode.quit,
			3
		);
		SelectionMode._select_group.add( SelectionMode._exit );
	
		main_layer.add(SelectionMode._select_group);
		SelectionMode._select_group.setZIndex(20);

		main_layer.draw();
	},

	markSelecteds: function()
	{
		SelectionMode._ids_map = {}
		SelectionMode._ids = {}

		for (var fam_pid in SelectionMode._items){
		  	var item = SelectionMode._items[fam_pid];

		 	if (!item.selected) continue;
		 	
		 	var fam = fam_pid.split("_")[0],
		 		pid = fam_pid.split("_")[1];

		 	if (!(fam in SelectionMode._ids_map)){
		 		SelectionMode._ids_map[fam] = {}; // generations, key first - array later
		 		
		 		SelectionMode._ids[fam] = {};
		 	}
		 	SelectionMode._ids[fam][pid] = 1;

		 	//Hopefully these are at the same level with few discrepencies
		 	var generation = item.graphics.getY()

		 	SelectionMode._ids_map[fam][generation] = SelectionMode._ids_map[fam][generation] || [];
		 	SelectionMode._ids_map[fam][generation].push( pid );
		}

		for (var fam in SelectionMode._ids_map){
			SelectionMode._ids_map[fam] = map2orderedArray( SelectionMode._ids_map[fam] )
		}
	},

	grabSelected: function(){
		SelectionMode._populateSelecteds();
		return SelectionMode
	},


	selectFam: function(fam_id){
		for (var key in SelectionMode._items){
			if (key.split("_")[0] == fam_id){
				SelectionMode._items[key].box.fire('click');
			}
		}
	},

	noneSelected: function(){
		return isEmpty(SelectionMode._ids);
	}
}

var SelectionAction = {

	toggle_selection_all : false,
	toggle_selection_affecteds : false,

	reset : function(){
		SelectionAction.toggle_selection_all = false;
		SelectionAction.toggle_selection_affecteds = false;
	},

	selectAll: function ()
	{
		SelectionAction.toggle_selection_all = !SelectionAction.toggle_selection_all;

		for (var key in SelectionMode._items){
			var item = SelectionMode._items[key];
			if(  (SelectionAction.toggle_selection_all && !item.selected)
			  || (!SelectionAction.toggle_selection_all && item.selected) ){
				item.box.fire('click')
			}
		}
	},

	selectAffecteds: function()
	{
		SelectionAction.toggle_selection_affecteds = !SelectionAction.toggle_selection_affecteds;

		for (var key in SelectionMode._items){
			var item = SelectionMode._items[key];
			var affected = (item.graphics.children[0].attrs.fill === col_affs[2])

			if (affected){
				if( (SelectionAction.toggle_selection_affecteds && !item.selected)
				 || (!SelectionAction.toggle_selection_affecteds && item.selected) ){
					item.box.fire('click');
				}
			}
		}
//		console.log("affecteds:", 
//			Object.keys(SelectionMode._items).filter( function (n){ return SelectionMode._items[n].affected === true;})
//		);
	}

}


var HaploWindow = {

	_left: new Kinetic.Rect({    //  side bar underlying markers
		x: 10, 
		y: 95,
		height: 100,
		width: 65,
		fill: 'white',
		shadowColor: 'white',
		shadowBlur: 8,
		cornerRadius: 10,
		opacity: 0.3
	}),


	_group : new Kinetic.Group(), // haplo_window
	_top : new Kinetic.Group(),   // haplo_window.top
	_bottom : null,               // haplo_window.bottom
	_background : null,			  // haplo_window.background

	_minpos : null,
	_maxpos : null,
	_boxlimsandgroup: null,

	min_node_placement_y : 0,
	left_margin_x : 100,
	white_margin : 20,
	y_margin : 0,

	destroy : function stopHaplomode(){

		HaploWindow.__aligntoggle = false; // workaround for alignment issue on re-entering mode

		HaploModeEvents._removeMouseWheel();

		HaploWindow._toggleBottom(false, function(){

			for (var fid in SelectionMode._ids){
				for (var id in SelectionMode._ids[fid]){

					var perc_gfx =  uniqueGraphOps.getFam(fid).nodes[id].graphics;
					var old_pos = perc_gfx.main_layer_pos;
					var old_group = perc_gfx.main_layer_group;
					
					// alert("here1");
					perc_gfx.remove();
					perc_gfx.listening( true );

					old_group.add(perc_gfx);

					// haplo_layer.draw();
					// main_layer.draw();
					// alert("here2");

					perc_gfx.setPosition({
						x: perc_gfx.getX() - old_group.getX(),
						y: perc_gfx.getY() - old_group.getY()
					});

					// haplo_layer.draw();
					// main_layer.draw();
					// alert("here3");

					(kineticTween({
						node: perc_gfx,
						x: old_pos.x,
						y: old_pos.y
					})).play();
				}
			}
			// KILL THEM, MWAAHAHA -- it's 5amm....
//			haplo_layer.remove( HaploWindow._background );
			HaploWindow._group.destroyChildren();
			HaploWindow._group.destroy();
			HaploWindow._background = null;
			HaploWindow._bottom = null;

			haplo_layer.destroyChildren();
			haplo_layer.draw();

			SelectionMode.destroy();
			ButtonModes.setToHaploView();
		});
	},

	
	init: function launchHaplomode()
	{
		SelectionAction.reset();	
		SelectionMode.markSelecteds();

		if (SelectionMode.noneSelected()){
			utility.notify("Error", "Please select some individuals")
//			SelectionMode.destroy();
//			HaploWindow.destroy();
//			main_layer.draw();
			return;
		}

		SelectionMode._exit.hide();

		var line_data = findDOSinSelection( SelectionMode._ids_map );

		HaploWindow._makeMainWindow( line_data );
	},


	_makeMainWindow : function( lines_nodes_to_render )
	{
		var res = mapLinesAndNodes( lines_nodes_to_render ); // DOS.js

		var line_points = res.lp,
			slot_array = res.sa;

		haplo_layer.add( HaploWindow._group );

		// Background
		HaploWindow._background = new Kinetic.Rect({
			width: window.innerWidth,
			height: window.innerHeight,
			fill: 'black',
			opacity: 0.5
		});

		haplo_layer.add( HaploWindow._background )
		HaploWindow._background.setZIndex(-20);

		//DOS.js
		DOS.render( line_points, slot_array, 
			// After nodes have moved, they are then popped
			// off SelectionMode._select_group, and added to haplo_window_top
			HaploWindow._makeTop
		);
	},

	// cs + cs + mu + to + ca + ca + ba = 100 + 100 + 100 + 40 + 60 + 60 + 100 = 560
	// pi + ch + fi + sa + ol = 120 + 80 + 80 + 20 + 20 = 320 
	// 880


	_makeTop(){
		var render_group = DOS.group;
		var min_pos = DOS.min,
			max_pos = DOS.max;

		// Share y position with aligment.js
		HaploWindow.min_node_placement_y = min_pos.y;
		HaploWindow._minpos = min_pos;
		HaploWindow._maxpos = max_pos;

		// White Rect
		HaploWindow._top.setPosition(
			// {x:min_pos.x - HaploWindow.white_margin, y: min_pos.y - HaploWindow.white_margin} 
			{x: DOS.initial_group_node_offset.x + (min_pos.x - HaploWindow.white_margin),
			 y: DOS.initial_group_node_offset.y + (min_pos.y - HaploWindow.white_margin)}
		);

		HaploWindow._top.rect = addWhiteRect({
			width: (max_pos.x - min_pos.x),
			height: (max_pos.y - min_pos.y) + 3*HaploWindow.white_margin
		});

		HaploWindow._top.add( HaploWindow._top.rect );

		// Exit button
		HaploWindow._exit = addExitButton(
			{x: 20,
			 y: 20},
			 HaploWindow.destroy,
			 2);

		HaploWindow._group.add( HaploWindow._exit );


		// Add rendered lines
		render_group.remove();
		HaploWindow._top.add( render_group );
		render_group.setY(-HaploWindow._top.getY());
		render_group.setX(-HaploWindow._top.getX() + 10);

		HaploWindow._group.add(HaploWindow._top);

		ButtonModes.setToComparisonMode();
		
		kineticTween({
			node: HaploWindow._top,
			x: HaploWindow.left_margin_x,
			y: HaploWindow.white_margin,
			duration:0.2,
			onFinish: function(){
				HaploWindow._toggleBottom(true);
			}
		}).play()

		main_layer.draw();
		haplo_layer.draw();	
	},

	_toggleBottom: function( show, finishfunc){
		HaploWindow.y_margin = 30;

		if (show){
			HaploModeEvents._addMouseWheel();
			HaploModeEvents.addKeys();
			
			HaploWindow.__showBottom( finishfunc );
		} else {
			HaploModeEvents._removeMouseWheel();
			HaploModeEvents.removeKeys();

			HaploWindow.__hideBottom( finishfunc );
		}
	},


	__showBottom: function(finishfunc = 0){
		HaploWindow._bottom = null; // delete old
		
		//Scroll window
		HaploWindow._bottom = new Kinetic.Group({
			x:HaploWindow._top.getX() ,
			y:HaploWindow._top.rect.getHeight() + HaploWindow.y_margin,
			id:"scroll_panel"
		});

		HaploWindow._bottom.rect = addWhiteRect({
			height: 0,
			width: HaploWindow._top.rect.getWidth()
		});

		
		// Expand Top box
		HaploWindow._bottom.add( HaploWindow._bottom.rect );
		HaploWindow._group.add( HaploWindow._bottom );
		HaploWindow._bottom.setZIndex(503);

		kineticTween({
			node: HaploWindow._bottom.rect,
			height: (3+HAP_DRAW_LIM) * HAP_VERT_SPA,
			onFinish: function(){
		
				var scroll_area__ = new Kinetic.Group({
					draggable:true,
					dragBoundFunc: function(pos){
						var group_loc = this.parent.getAbsolutePosition();

						return {
							x: group_loc.x,
							y: group_loc.y + (Math.floor((pos.y - group_loc.y)/ HAP_VERT_SPA) * HAP_VERT_SPA)
						};
					}
				});


				scroll_area__.on('mousedown', function(){

					function mouseUp(){
						HaploBlock.redrawHaplos(false); // starting=300
						SliderHandler.updateInputsByIndex();					
						SliderHandler.updateSlide();
						haplo_layer.draw();
						document.removeEventListener("mouseup", mouseUp, false);
					}
					document.addEventListener("mouseup", mouseUp, false);
				});

				uniqueGraphOps.haplo_scroll = HaploWindow._bottom;
				uniqueGraphOps.haplo_area = scroll_area__;

				HaploWindow._bottom.add( scroll_area__ );


				HaploWindow._group.add( HaploWindow._left );
				HaploWindow._left.show();
				HaploWindow._left.moveToBottom();
				HaploWindow._left.moveUp();

				HaploBlock.init( SelectionMode._ids );

				if (finishfunc!==0) {
					finishfunc();
				}

				MarkerSlider.makeVisible(true)
				Resize.resizeCanvas();
			}
		}).play();
	},

	__hideBottom: function(finishfunc = 0){
		if (uniqueGraphOps.haplo_area !== null){
			uniqueGraphOps.haplo_area.hide();
		}

		if (HaploWindow._bottom === null){
			finishfunc();
			return;
		}

		HaploWindow._left.hide();

		kineticTween({
			node: HaploWindow._bottom.rect,
			height:0,
			onFinish: function(){

				HaploWindow._bottom.destroyChildren();	//Bit of genocide
				HaploWindow._bottom.destroy();
				HaploWindow._bottom = null;

				HaploWindow._exit.destroy();
				HaploWindow._exit = null;

				HaploWindow._group.remove( HaploWindow._left );
				if (finishfunc!==0){
					finishfunc();
				}
			}
		}).play();
	}
}

var HaploModeEvents = {

	shiftHaplotypes : function(delta)
	{
		HaploBlock.sta_index += delta;
		HaploBlock.end_index += delta;

		HaploModeEvents.moveHaplotypes();
	},


	moveHaplotypes : function()
	{
		SliderHandler.updateInputsByIndex();
		SliderHandler.updateSlide();
		
		HaploBlock.redrawHaplos(false);	
	},


	// Public
	addKeys : function(){
		HaploModeEvents._addArrowKeys();
		HaploModeEvents._addPageKeys();
	},

	removeKeys : function(){
		HaploModeEvents._removeArrowKeys();
		HaploModeEvents._removePageKeys();
	},


	// KeyEvents
	_addArrowKeys: function(){

		Keyboard.addKeyDownTask("ArrowDown", HaploModeEvents._keyScrollDown);
		Keyboard.addKeyDownTask("ArrowUp", HaploModeEvents._keyScrollUp);
	},

	_removeArrowKeys: function(){

		Keyboard.removeKeyDownTask("ArrowDown", HaploModeEvents._keyScrollDown);
		Keyboard.removeKeyDownTask("ArrowUp", HaploModeEvents._keyScrollUp);
	},

	// Page Events
	_addPageKeys : function (){
		Keyboard.addKeyDownTask("PageDown", HaploModeEvents._pageScrollDown )
		Keyboard.addKeyDownTask("PageUp", HaploModeEvents._pageScrollUp )
	},

	_removePageKeys : function (){
		Keyboard.removeKeyDownTask("PageDown", HaploModeEvents._pageScrollDown )
		Keyboard.removeKeyDownTask("PageUp", HaploModeEvents._pageScrollUp )
	},

	_keyScrollUp : function(){HaploModeEvents._keyScroller(-5);},
	_keyScrollDown:function(){HaploModeEvents._keyScroller( 5);},
	_pageScrollUp: function(){HaploModeEvents._keyScroller( -15);},
	_pageScrollDown: function(){HaploModeEvents._keyScroller(15);},

	_keyScroller: function(amount){
		HaploModeEvents.shiftHaplotypes(amount)
	},


	// Mouse Events
	_addMouseWheel: function(){
		if (document.addEventListener) {
        	document.addEventListener("mousewheel", HaploModeEvents._wheelHandler, false); //IE9, Chrome, Safari, Oper
        	document.addEventListener("wheel", HaploModeEvents._wheelHandler, false); //Firefox
    	} else {
        	document.attachEvent("onmousewheel", HaploModeEvents._wheelHandler); //IE 6/7/8
    	}
	},

	_removeMouseWheel: function(){
		if (document.addEventListener) {
        	document.removeEventListener("mousewheel", HaploModeEvents._wheelHandler, false); //IE9, Chrome, Safari, Oper
        	document.removeEventListener("wheel", HaploModeEvents._wheelHandler, false); //Firefox
    	} else {
        	document.detachEvent("onmousewheel", HaploModeEvents._wheelHandler); //IE 6/7/8
    	}
	},


	_scrollBarsNotMiddle: function(){
		var wh = window.innerHeight,
			st = document.body.scrollTop,
			sh = document.body.scrollHeight;

		// Scroll haplotypes only when scrollbars are
		// either at top or bottom.
		return (wh - st === wh || st + wh > sh);
	},

	_prevwheelstate : null,

	_wheelHandler: function(event){

		if (HaploModeEvents._scrollBarsNotMiddle())
		{
			var delta = event.detail;
			if (delta === 0){
				delta = (event.deltaY > 0)?3:-3;
			}

			var wheelstatechanged = false;

			if ((delta > 0 && HaploModeEvents._prevwheelstate < 0)
			  ||(delta < 0 && HaploModeEvents._prevwheelstate > 0))
			{
				wheelstatechanged = true
			}

			if (!wheelstatechanged){
				HaploModeEvents.shiftHaplotypes(delta);
			}
			HaploModeEvents._prevwheelstate = delta;
		}
	}
}

HaploWindow.__aligntoggle = false;

HaploWindow.alignTopSelection = function(group_nodes, group_lines)
{
	// Group lines = DOS lines 
	// Group nodes = Pedigree nodes.

	HaploWindow.__aligntoggle = !HaploWindow.__aligntoggle;

	var tween_array = [];
	
	if (HaploWindow.__aligntoggle){
		group_lines.hide();

		var y_line = HaploWindow.min_node_placement_y + DOS.initial_group_node_offset.y;

		for (var g=0; g < group_nodes.children.length; g++){
			var nd = group_nodes.children[g];

			nd.old_ypos = nd.getY();

			tween_array.push(
				kineticTween({
					node: nd,
					x: nd.getX(),
					y: y_line
				})
			);
		}

		// Shrink!
		HaploWindow._top.rect.old_height = HaploWindow._top.rect.getHeight();

		tween_array.push(
			kineticTween({
				node: HaploWindow._top.rect,
				height: HaploWindow.white_margin * 3
			})
		);


		// Move bottom box too (if defined)
		if (HaploWindow._bottom !== undefined){
			HaploWindow._bottom.old_ypos = HaploWindow._bottom.getY();
			HaploWindow._left.old_ypos = HaploWindow._left.getY();

			tween_array.push(
				kineticTween({
					node: HaploWindow._bottom,
					y: (HaploWindow.white_margin * 3) + HaploWindow.y_margin
				})
			);

			tween_array.push(
				kineticTween({
					node: HaploWindow._left,
					y: (HaploWindow.white_margin * 3) + HaploWindow.y_margin
				})
			);
		}
	}
	else {
		group_lines.show();

		var render_counter = group_nodes.children.length - 1;
		// preserved until no longer used

		for (var g=0; g < group_nodes.children.length; g++){
			var nd = group_nodes.children[g];

			tween_array.push(
				kineticTween({
					node: nd,
					x: nd.getX(),
					y: nd.old_ypos,
					onFinish: function(){
						if (render_counter-- === 0){
							group_lines.show();
						}
					}
				})
			);
		}

		// Unshrink
		tween_array.push(
			kineticTween({
				node: HaploWindow._top.rect,
				height: HaploWindow._top.rect.old_height
			})
		);

		tween_array.push(
			kineticTween({
				node: HaploWindow._left,
				y: HaploWindow._left.old_ypos,
			})
		);


		// Move bottom box back
		if (HaploWindow._bottom !== undefined){
			tween_array.push(
				kineticTween({
					node: HaploWindow._bottom,
					y: HaploWindow._bottom.old_ypos
				})
			);
		}
	}

	// Smoother to build tweens first, then execute them
	for (var t=0; t < tween_array.length;)
	{
		tween_array[t++].play();
	}

	setTimeout(Resize.resizeCanvas, 800);

	haplo_layer.draw();
}



var familyDraw = {

	active_fam_group : null,

	selectFam: function(fid){
		// Deselect previous group
		if (familyDraw.active_fam_group !== null){
			familyDraw.active_fam_group.fam_title_text.setFontStyle("normal");
		}

		// Select new group
		var fam = uniqueGraphOps.getFam(fid).group
		fam.fam_title_text.setFontStyle("bold");
		main_layer.draw();

		// Make new group active
		familyDraw.active_fam_group = fam;
	},

	addFam: function(fam_id = null, position = null, callback = null){	

		if (fam_id === null){
			utility.inputprompt("Family ID?", function(family){
				fam_id = family; /*messProps._input.value*/
				familyDraw.addFam(fam_id,position,callback);
			});
			return;
		}

		if (uniqueGraphOps.famExists(fam_id)){
			utility.message("Family ID",fam_id,"already in use");
			return;
		}

		var fam = Graphics.Pedigree.addFamily( fam_id, 50, 50 );
		uniqueGraphOps.insertFam(fam.id, fam);

		fam.on( "click dragstart" , function(){
			familyDraw.selectFam(fam.id);
		});

		fam.fam_title_text.setFontStyle("bold");
		familyDraw.active_fam_group = fam;


		if (position !== null){
			fam.setX(position.x);
			fam.setY(position.y);
		}

		if (callback !== null){
			callback();		
		}

		
		main_layer.draw()
	},	
}

var personDraw = {
	//Ids MUST be unique, even if user doesn't have a specific ID in mind
	// -- Required for makeTempPerson() to have unique hooks in family and graph data
	// -- The user can then change it later
	used_ids : {},

	makeTempPerson: function()
	{
		//Get smallest unused id
		var id_counter = 0;
		while (++id_counter in this.used_ids){}

		return new Person(id_counter, 1, 1, 0 ,0);
	},


	changeNodeProps: function(node)
	{
		var oldX = node.getX(),
			oldY = node.getY(),
			oldID= node.id,
			famid = node.family;


		var old_person = familyMapOps.getPerc(oldID,famid);
		var new_person = null

		persProps.display(old_person, function onSubmit(newPerc){

			new_person = newPerc;

			if (oldID !== new_person.id){

				if (new_person.id in personDraw.used_ids){
					utility.notify("Error", "Id "+new_person.id+" already in use");
					return -1;
				}
			}

			// Update ids list
			delete personDraw.used_ids[oldID]

			
			uniqueGraphOps.deleteNode(oldID, famid);
			
			familyMapOps.removePerc(oldID, famid);
			personDraw.addNode(new_person, famid, {x:oldX, y:oldY})



			// One cannot simply update name/id/gender/affectation, because
			// mateline and childlines are hardcoded to IDs. Easier to delete and reinsert.	
			
			familyMapOps.insertPerc(new_person, famid);

			// -- child lines to parents
			if (old_person.father !== 0){

				var childline = uniqueGraphOps.getChildEdge(
					famid, 
					old_person.father.id, old_person.mother.id,
					old_person.id);

				uniqueGraphOps.deleteEdge(childline, famid);

				var mateline_key = edgeAccessor.matelineID(
					old_person.father.id, old_person.mother.id);

				(new OffspringDraw(famid, mateline_key, new_person.id));
			}

			// -- mate lines to partners 
			if (old_person.mates.length > 0){
				old_person.foreachmate(function(mate)
				{
					var male = (mate.gender === PED.MALE)?mate:old_person;
					var female = (mate.gender === PED.FEMALE)?mate:old_person;

					var old_mate_key = uniqueGraphOps.getMateEdge(
						famid, male.id, female.id);

					uniqueGraphOps.deleteEdge(old_mate_key, famid);

					if (new_person.gender === old_person.gender)
					{
						console.log("joining", famid, mate.id, new_person.id);
						(new MatelineDraw(famid, mate.id, new_person.id));

						old_person.foreachchild(mate, function(child){
							var old_childline = uniqueGraphOps.makeChildEdge( famid, male.id, female.id, child.id );

							var isMother = new_person.gender === PED.FEMALE,
								new_childline = null;
							
							if (isMother){
								new_childline = uniqueGraphOps.makeChildEdge(famid, mate.id, new_person.id, child.id)
								child.mother = new_person;
							} else {
								new_childline = uniqueGraphOps.makeChildEdge(famid, new_person.id, mate.id, child.id);
								child.father = new_person;
							}

							uniqueGraphOps.transferEdge(famid, old_childline,new_childline);
							new_person.addChild(child)

						});

					}
					else {
						// Mates are incompatible genders, children are now orphaned.
						console.log("detach this and childs!");
					}
				})
			}			

			// Regenerate the level grid otherwise drag functions cry
			//GlobalLevelGrid.refreshGrid(famid);

			main_layer.draw();
		});
	},

	showNodeMenu: function(node){
		/*TODO*/
		// For now, just change props
		this.changeNodeProps(node);
	},

	addNode: function(person = null, fam_id = null, position= null){

		if (fam_id === null){
			if (!familyDraw.active_fam_group === null){
				fam_id = familyDraw.active_fam_group.id;
				familyDraw.active_fam_group = uniqueGraphOps.getFam(fam_id);
			}
		}


		if (familyDraw.active_fam_group === null)
		{
			var num_fams = familyMapOps.numFams();

			if (num_fams !== 0){
				utility.notify("Note","Need to select family first");
			}
			else {
				utility.notify("No family selected", "Creating new family");

				familyDraw.addFam(null, null, 
					function(){
						personDraw._addNodeToActiveFam(person, position)
					}
				);
			}
		} else {
			personDraw._addNodeToActiveFam(person, position);
		}
	},


	_addNodeToActiveFam: function(person = null, position = null){

		var fam_group = familyDraw.active_fam_group;
		uniqueGraphOps.insertFam(fam_group.id, fam_group);

		if (person === null ){ 
			person = this.makeTempPerson();
		}

		var perc = Graphics.Pedigree.addPerson( person, fam_group,  
				grid_rezX ,
				-nodeSize // + Math.random()*grid_rezY*2
		);
		perc.family = fam_group.id;

		personDraw.addClickFunctions(perc);

		//family map stores the person data
		// used_ids stores the graphics
		familyMapOps.insertPerc(person, perc.family);
		uniqueGraphOps.insertNode(person.id, perc.family, perc);

		if (position !== null){
			perc.setX(position.x);
			perc.setY(position.y);
		}
		else {
			// Find next free space
			var next_avail_pos = SelectionGraphics.nextEmptySlot(
				familyDraw.active_fam_group.id
			);
			perc.setX(next_avail_pos.x);
			perc.setY(next_avail_pos.y);
		}

		main_layer.draw();
		return perc;
	},

	addClickFunctions: function(perc){

		perc.on("click", function(){
			familyDraw.selectFam(this.family);
		})

		perc.on("dblclick", function(){
			personDraw.showNodeMenu(this);
		})

		// Add to used IDs
		personDraw.used_ids[perc.id] = perc;

	}
}
// Super class of offspringDraw and matelineDraw classes


class LineDrawOps {

	constructor(familyID) {

		this._family = familyID

		this._layer = null; /*Layer*/
		this._tmpRect = null; /* Rectangle to detect mousemove */

		this._tmpLine = null;
		this._startPoint = {x:-1,y:-1};
		this._endPoint = {x:-1,y:-1};

		this._RLineMethod = Graphics.Lines.changeRLineHoriz;

		// Callbacks
		// Set before _init
		this._oncirclemousedown = null;
		this._oncirclemousedown_final = null;
		this._onaddhit = null;
		this._ondelhit = null;		
		this._onbeginlinedraw = null;
		this._onbeginlinedraw_mousemove = null;
		this._onbeginlinedraw_mouseup = null;
		this._onendlinedraw = null;

	}


	_delHitRect() {

		if (this._ondelhit !== null){
			this._ondelhit();
		}

		if (this._layer !== null){
			this._layer.destroy();
			this._layer = null;
		}
	}

	_addHitRect() {

		this._layer = (new Kinetic.Layer({
			width: stage.getWidth(),
			height:stage.getHeight(),
			x:0, y:0
		}));

		this._tmpRect = (new Kinetic.Rect({
			width: stage.getWidth(),
			height:stage.getHeight(),
			x:0, y:0,
		}))

		stage.add( this._layer );
		this._layer.add(this._tmpRect);

		this.drawCircles();

		if (this._onaddhit !== null){
			this._onaddhit();
		}

		this._layer.draw();
	}


	updateLine() {
		this._RLineMethod(
			this._tmpLine,
			this._startPoint,
			this._endPoint
		);
	}


	beginLineDraw() {
		var _this = this;

		_this._tmpLine = new Kinetic.Line({
			stroke: 'black',
			strokeWidth: 2,
		});

		_this._layer.add(_this._tmpLine);	

		_this._tmpRect.on("mousemove", function(event){
			if (_this._startPoint.x !== -1){

				var mouseX = Math.floor(event.evt.clientX/grid_rezX)*grid_rezX,
					mouseY = Math.floor(event.evt.clientY/grid_rezY)*grid_rezY;

				_this._endPoint = {x: mouseX, y: mouseY};

				_this.updateLine();

				if (_this._onbeginlinedraw_mousemove !== null){
					_this._onbeginlinedraw_mousemove(); // pass this?
				}
	
				_this._layer.draw();
			}
		});

		_this._tmpRect.on("mouseup", function(event){

			if (_this._onbeginlinedraw_mouseup !== null){
				_this._onbeginlinedraw_mouseup(); // pass this?
			}

			_this.endLineDraw();
		});
	}

	endLineDraw() {

		this._delHitRect();	
		
		if (this._tmpLine !== null){
			this._tmpLine.destroy();
			this._tmpLine = null;
		}
		
		MouseStyle.restoreCursor();

		if (this._onendlinedraw !== null){
			this._onendlinedraw(); // pass this?
		}

		this._startPoint = {x:-1, y:-1}

	}

	drawCircles(){

		var _this = this;

		var circleGroup = new Kinetic.Group({});

		for (var perc_id in personDraw.used_ids)
		{
			var personIn = personDraw.used_ids[perc_id]

			if (personIn.family !== _this._family){
				continue;
			}

			var gfx = personIn.gfx;

			var apos = gfx.getAbsolutePosition(),
				rad = 15 ;

			var circle = new Kinetic.Circle({
				x: apos.x, 
				y: apos.y,
				radius: rad*2,
				stroke:"red",
				strokeWidth:2.5
			});
			circle.id = perc_id;

			circle.on("mouseover", function(event){
				
				if (_this._startPoint.x === -1){
					MouseStyle.changeToArrowCursor();
				}
				else { //Start point set

					_this._endPoint = this.getAbsolutePosition();

					_this.updateLine();
					_this._layer.draw();
				}
			});

			circle.on("mouseout", function(){
				if (_this._startPoint.x === -1){
					MouseStyle.restoreCursor();
				}
			});


			circle.on("mousedown mouseup", function(event, callback)
			{
				if (_this._startPoint.x === -1){
					var cX = this.getX(),
						cY = this.getY();

					_this._startPoint = {x:cX, y:cY};

					if (_this._oncirclemousedown !== null){
						_this._oncirclemousedown(this, circleGroup); // Pass circle object on
						//  _this.childNodeID = this.id
					}
					_this.beginLineDraw();
				}
				else {
					
					// Execute callback on second selection/completion
					if (_this._oncirclemousedown_final !== null){
						_this._oncirclemousedown_final(this);
					}
					
					_this.endLineDraw();
				}


			});
			circleGroup.add(circle);
		}
		_this._layer.add(circleGroup);
	}


	init(){
		if (this._tmpLine !== null){
			this.endLineDraw();
		}

		this._addHitRect();
	}
}



class MatelineDraw extends LineDrawOps {

	constructor(familyID, startID = null, endID = null)
	{
		super(familyID);

		this.startNodeID = startID;
		this.endNodeID = endID;

		this.matelineID = null;

		// First click
		this._oncirclemousedown = function(circle, group){
			this.startNodeID = circle.id;
			console.log("startNodeID=", this.startNodeID);
		}

		// Second click
		this._oncirclemousedown_final = function(circle){
			this.endNodeID = circle.id;
			console.log("endNodeID=", this.endNodeID)

			this._joinIDs()
		}

		// If IDs set in constructor, just perform a join.
		if (this.endNodeID !== null){
			this._joinIDs();
		}
	}


	_joinIDs(){
		// Add line to unique_graph_obs so that dragevents would update it
		// But ONLY after the relationship has been set

		// Rules:
		//   1. Two types of lines
		//      a. Mateline
		//      b. Parentline
		//   
		//   2. Parentline hangs from center of Mateline
		//      there requires a Mateline to be present before creation
		//
		//   3. There needs to be a temp node hanging in the center of mateline to
		//      join offspring to.

		// Mates aren't connected in family map, only in unique_graph_lines
		var person1 = personDraw.used_ids[Number(this.startNodeID)],
			person2 = personDraw.used_ids[Number(this.endNodeID)];

		if (person1.id === 0 || person2.id === 0){
			console.log("Not possible");
			return;
		}

		person1	= familyMapOps.getPerc(person1.id, this._family);
		person2	= familyMapOps.getPerc(person2.id, this._family);

		if (person1.gender === person2.gender){
			var type = {0: 'unknowns',
						1: 'males, not yet applicable',
						2: 'females, not yet applicable'};

			utility.notify("Error:", "Cannot join two " + type[person1.gender]);
			return;
		}


		var moth = (person1.gender===PED.FEMALE)?person1:person2,
			fath = (person1.gender===PED.MALE)?person1:person2;

		moth.addMate(fath);
		fath.addMate(moth);

		// Need to manually insert the line
		var u_matesline = edgeAccessor.matelineID(fath.id, moth.id);
		this.matelineID = u_matesline;  // Not used internally

		// If line does not exist -- (because ids are declared and user-set) -- create one
		if (this._tmpLine === null){
			console.log("creating new dummy line");
			this._tmpLine = new Kinetic.Line({
				stroke: 'black',
				strokeWidth: 2,
				points: [0,0,1,1,2,2]
			});
		}
		else {
			// Perform horizontal flip if neccesary on existing line
			var points = this._tmpLine.getPoints();
			//console.log(points)

			if (points[0] > points[6]){
				console.log("invert!");
				//invert line -- only four points do it manually
				var inverted = [
					-points[6], -points[7],
					-points[4], -points[5],
					-points[2], -points[3],
					-points[0], -points[1]
				];

				this._tmpLine.setPoints(inverted);
			}
		}



		var fam_gfx = uniqueGraphOps.getFam(this._family),
			fam_group = fam_gfx.group,
			group_pos = fam_group.getAbsolutePosition(),
			
			points = this._tmpLine.getPoints(),
			start = {x:points[0], y:points[1]},
			end = {x:points[6], y:points[7]},
			
			consang = checkConsanginuity(fam_group.id, this.startNodeID, this.endNodeID),
			new_line = Graphics.Lines.addRLine(fam_group, start, end, consang);

		this._tmpLine.destroy();

		var fath_gfx = fam_gfx.nodes[moth.id].graphics.getPosition();

		new_line.setX( fath_gfx.x );
		new_line.setY( fath_gfx.y );


		uniqueGraphOps.insertEdge(
			u_matesline, fam_group.id, new_line,
			fath.id, 
			moth.id, 
			0,
			consang
		)
		new_line.setZIndex(1);

		GlobalLevelGrid.refreshGrid(this._family);

		//reset
		this.endLineDraw();
		redrawNodes(fath.id, this._family, true);
		touchlines();
		main_layer.draw();
	}



};
/* This class also updates the grid for all parent-offspring connections */

class OffspringDraw extends LineDrawOps {

	constructor(familyID, id_mateline = null, id_childnode = null){

		super(familyID);

		if (OffspringDraw.numMateLines(familyID) < 1)
		{
			this.init = null;
			console.log("No matelines detected");
		
		} else {

			this._RLineMethod = Graphics.Lines.changeRLine

			this._endPoint = {x:-1,y:-1};

			this.matelineID = id_mateline;
			this.childNodeID = id_childnode;


			// If ids set by constructor, just perform a join
			if (this.childNodeID !== null)
			{
				this.__joinIDs();		
			
			} else {
				// First click, and nodes encapsulate second click
				//
				this._oncirclemousedown = function(circle, circlegroup)
				{
					this.childNodeID = circle.id;
					console.log("childNodeID", this.childNodeID)

					circlegroup.destroy(); // For offspring, hide circles as soon as one is picked as a start point
					
					this.__drawNodes();
				}
			}

		}
	}



	__drawNodes() {
		var _this = this;

		var familyID = _this._family;

		var fam_gfx   = uniqueGraphOps.getFam(familyID),
			fam_group = fam_gfx.group,
			edge_map  = fam_gfx.edges,
			node_map  = fam_gfx.nodes;

		var nodeGroup = new Kinetic.Group({});

		for (var key in edge_map){
			if (key[0]==='m')
			{
				var ids = key.split(':')[1].split('-');

				if (ids.indexOf(this.childNodeID)!==-1){
					console.log("skipping", key, "because", this.childNodeID, "exists within pair")
					continue;
				}

				var mateline_graphics = edge_map[key].graphics;

				// Sib_Anchor node is TEMPORARY. It is deleted upon ~offspringDraw()
				var node = Graphics.Shapes.addCircle("white", nodeSize/2);

				node.hitFunc(function(context){
					var center = this.getPosition();
					context.beginPath();
					context.arc(0, 0, 40, 0, 2 * Math.PI, true);
					context.closePath();
					context.fillStrokeShape(this);
				});

				node.matelineID = key;

				// Lock offspring line to node if nearby
				node.on("mouseover", function(){
					_this.__lockToNode(this);
				});

				// Mouse up -- it's been selected
				node.on("mouseup", function(){
					_this.__lockToNode(this);

					_this.matelineID = this.matelineID;
					console.log("stored mateline_ID", _this.matelineID);

					_this.__joinIDs();

					nodeGroup.destroy();
					delete uniqueGraphOps.getFam(familyID).edges[this.matelineID].sib_anchor

					_this.endLineDraw();


				});
				mateline_graphics.sib_anchor = node; // changeRline can now update
				
				nodeGroup.add( node );

				var startID = edge_map[key].start_join_id,
					endID = edge_map[key].end_join_id;

				var startGraphics = node_map[startID].graphics,
					endGraphics   = node_map[endID].graphics;

				Graphics.Lines.changeRLineHoriz(
					mateline_graphics,    // NOT this._RLineMethod
					startGraphics.getAbsolutePosition(),
					endGraphics.getAbsolutePosition());
			}
		}
		this._layer.add(nodeGroup);
		this._layer.draw();
		//main_layer.draw();
	}



	__joinIDs(){

		var u_childline = edgeAccessor.childlineID(this.matelineID, this.childNodeID);

		var father_mother_ids = this.matelineID.split(':')[1].split('-'),
			father = familyMapOps.getPerc(Number(father_mother_ids[0]), this._family),
			mother = familyMapOps.getPerc(Number(father_mother_ids[1]), this._family),
			child = familyMapOps.getPerc(this.childNodeID, this._family);

		father.children.push(child); 
		mother.children.push(child);

		child.mother = mother;
		child.father = father;

		var new_line;
		if (this._tmpLine !== null){
			new_line = this._tmpLine.clone();
		}
		else {
			new_line = new Kinetic.Line({
				stroke: 'black',
				strokeWidth: 2,
				points: [0,0,1,1,2,2]
			});
		}

		uniqueGraphOps.getFam(this._family).group.add(new_line);

		uniqueGraphOps.insertEdge(
			u_childline, this._family, new_line,
			this.matelineID, 
			child.id, 
			2,
			false
		)
		new_line.setZIndex(1);

		// Regenerate the level grid otherwise drag functions cry
		GlobalLevelGrid.refreshGrid(this._family);

		redrawNodes(father.id, this._family, true);
		touchlines();
		main_layer.draw();
	}


	__lockToNode(node) {
		if (this._tmpLine !== null)
		{
			this._endPoint = node.getPosition();
			this.updateLine();
			this._layer.draw();
		}
	}


	static numMateLines(famID){
		return Object.keys(uniqueGraphOps.getFam(famID).edges).filter(v => v[0] === 'm').length;
	}
};


var AssignHGroups = {

	resolvers : {
		ASTAR : 0,    // default
		DESCENT : 1,  // Simwalk  (1 2 1 2 1 2)
		FLOW : 2 	  // Merlin   (A B C D E F)
	},

	// First pass -- assign groups
	init: function(resolver_method = 0)
	{

		var resolveBlocks = AssignHGroups.__setResolverMethod(resolver_method);

		GlobalLevelGrid.foreachfam(function(grid, fam){
			// First generation must be founders
			var founder_gen = grid[0];

			for (var p = 0; p < founder_gen.length; p++){
				AssignHGroups.initFounderAlleles( fam, founder_gen[p]);
			}

			for (var g = 1; g < grid.length; g++){
				for (var p =0; p < grid[g].length; p++)
				{
					var pers_id = grid[g][p],
						pers    = familyMapOps.getPerc(pers_id, fam);

					var moth_id = pers.mother.id,
						fath_id = pers.father.id;

					if (moth_id == undefined){
						// Person is a founder -- add and skip
						AssignHGroups.initFounderAlleles( fam, pers_id );
						continue;
					}

					var moth = familyMapOps.getPerc(moth_id, fam),
						fath = familyMapOps.getPerc(fath_id, fam);

					resolveBlocks(pers, moth, fath, fam);
				}
			}
			AssignHGroups.pointerCleanup(fam);
		});

		// Flow determines founder allele groups directly
		if (resolver_method === AssignHGroups.resolvers.FLOW)
		{
			FlowResolver.initFounderAlleles();
		}

		FounderColor.makeUniqueColors();
	},

	__setResolverMethod: function(resolver){

		var resolverMethod = null;

		switch(resolver){
			case AssignHGroups.resolvers.ASTAR:
				console.log("Resolve: ASTAR");
				resolverMethod = AstarHandler.child2parent_link;
				break;

			case AssignHGroups.resolvers.DESCENT:
				console.log("Resolve: DESCENT");
				resolverMethod = DescentResolver.child2parent_link;
				break;

			case AssignHGroups.resolvers.FLOW:
				console.log("Resolve: FLOW");
				resolverMethod = FlowResolver.child2parent_link;
				break;

			default:
				throw new Error("Invalid resolver mode :" + resolver);
		}
		return resolverMethod;
	},


	// Only used by Astar and Descent resolvers
	initFounderAlleles: function(fid,id)
	{

		var perc_hdata = familyMapOps.getPerc(id,fid).haplo_data;

		for (var a = 0; a < perc_hdata.length; a++) 	// current allele
		{			
			var color_group = FounderColor.hgroup.length;

			// Push the same guy twice for both alleles
			// Different colors (indices) will refer to the same (duplicated) id
			FounderColor.hgroup.push( id );					

			/*
			This is the color group. If it just pointed to it's data, then only a 0 1 or 2 would propogate down through
			the pedigree. Which would be MEANINGLESS, since we want to trace specific colors to individuals.

			Only founders get unique ones. Non-founders simply trace these from their parents.
			*/
			var	allele_ptrs = perc_hdata[a].pter_array;

			for (var i=0; i < allele_ptrs.length; i++){
				allele_ptrs[i].color_group = [color_group];
			}


			allele_ptrs.unique_groups = [color_group];
	// 		console.log("founder "+id+" "+a, allele_ptrs[0].color_group, perc_hdata[a].data_array[0]);
		}
		// console.log("Cf", id, AssignHGroups,debugHaploData(perc_hdata));
	},

	debugHaploData: function(dat){
		return { 0: dat[0].debug(),
				 1: dat[1].debug()};
	},


	pointerCleanup: function(fam)
	{
		familyMapOps.foreachperc(function(pid, perc){
			var both_alleles = perc.haplo_data;

			for (var a = 0; a < both_alleles.length; a++)
			{
				//Clean pointers
				var pointer_array =  both_alleles[a].pter_array;
				var group_array = (both_alleles[a].haplogroup_array = new Int8Array(pointer_array.length));

				// 64-bit iterator, yet implicit 64 --> 8 bit conv: How? Fuck knows.

				var curr_index = -1;
				while (++curr_index < pointer_array.length) {
					group_array[curr_index] = pointer_array[curr_index].color_group[0];
				}

				// Leave for GC
//				delete both_alleles[a].pter_array;
//				delete both_alleles[a].descent;
//				delete both_alleles[a].flow
			}
		}, fam);
	}
}





var htext = null; // DEBUG

var HaploBlock = {

	sta_index : 0,
	end_index : 0,

	haploinfos : null, // what addHaploBlocksAll uses 


	/* Called once - displays multiple individuals across any family */
	init(haplofam_map, parent_node)
	{
		HaploBlock.haploinfos = []; //clean

		HaploBlock.sta_index = 0;
		HaploBlock.end_index = Resize.numVisibleHaplos;

		var position_by_xpos = {};

		for (var fid in haplofam_map)
		{
			var fam_x = uniqueGraphOps.getFam(fid).group.getX();

			for (var pid in haplofam_map[fid])
			{
				var pers_x = uniqueGraphOps.getNode(pid,fid).graphics.getX() + fam_x,
					pers_hp = familyMapOps.getPerc(pid,fid).haplo_data;

				//haploinfos.push(pers_hp);
				if (pers_x in position_by_xpos){
					console.log("ERROR, duplicate position!");
					continue;
				}
				position_by_xpos[pers_x] = {fam:fid, per:pid, data:pers_hp};
			}
		}


		var sorted_positions = Object.keys(position_by_xpos);
		sorted_positions.sort(function(a,b){ return Number(a)-Number(b);});

		for (var p=0; p < sorted_positions.length; p++)
		{
			var key = sorted_positions[p];
			HaploBlock.haploinfos.push( position_by_xpos[key].data );
		}

		SliderHandler.inputsLocked = true;
		HaploBlock.redrawHaplos(true);
	},


	/* Redraws the current haplodata_arr group, regardless of who they are*/
	redrawHaplos(resizeToo){

		if (resizeToo){
			Resize.resizeCanvas();
		}

		var scroll_rect = uniqueGraphOps.haplo_scroll,
			scroll_area = uniqueGraphOps.haplo_area;

		var diff_y = scroll_rect.getAbsolutePosition().y - scroll_area.getAbsolutePosition().y,
			index_start_delta = Math.floor( diff_y / HAP_VERT_SPA );

		//console.log("diffy="+diff_y, "ind_start_d="+index_start_delta);
		HaploBlock.sta_index += index_start_delta;
		HaploBlock.end_index += index_start_delta;
		//console.log("shifting by "+index_start_delta, sta_index, end_index);



		// Update marker background height
		HaploWindow._left.setY( HaploWindow._bottom.rect.getAbsolutePosition().y );
		HaploWindow._left.setHeight( HaploWindow._bottom.rect.getHeight() );

		// Delete after grabbing position
		scroll_area.destroyChildren();
		scroll_area.setY(0);

		// console.log("indexes = ", sta_index, end_index);

		if (HaploBlock.sta_index < 0){
			HaploBlock.sta_index = 0;
			HaploBlock.end_index = HAP_DRAW_LIM;
		}
		if (HaploBlock.end_index > MarkerData.getLength() -1){
			HaploBlock.end_index = MarkerData.getLength() -1
			HaploBlock.sta_index = HaploBlock.end_index - HAP_DRAW_LIM;
		}

		var new_haplos = HaploBlock.__addHaploBlocksAll();
		scroll_area.add( new_haplos );

		if (HomologyPlot.rendered_filtered_plot !== null && HomologyPlot.rendered_filtered_plot.length > 0)
		{
			var homology_overlays = HomologyPlot.addHomologyPlotOverlay();
			scroll_area.add( homology_overlays );
		}

		scroll_area.parent.show();
		haplo_layer.draw();
	},


	__addHaploBlocksAll()
	{
		var grp = new Kinetic.Group({ x:-50, y:((2*nodeSize)+10)});

		var haplo = new Kinetic.Group({});

		//Process blocks
		for (var q=0; q < HaploBlock.haploinfos.length; q++)
		{

			for (var j=0; j <2; j++)
			{
				var one_hgroup = HaploBlock.haploinfos[q][j].haplogroup_array;

				var ind = HaploBlock.sta_index;
				while (ind <= HaploBlock.end_index)
				{
					var iter = ind,	 				// start of block
						color_group = one_hgroup[iter];

					while (  one_hgroup[++iter] === color_group
						   && iter <= HaploBlock.end_index){}


					var rec = new Kinetic.Rect(HaploBlockFormat.format.blockprops);

					rec.attrs.y = ((ind - HaploBlock.sta_index - 2) * HAP_VERT_SPA);
					rec.attrs.height = (iter-ind) * HAP_VERT_SPA;
					rec.attrs.fill = FounderColor.unique[color_group];		
					rec.attrs.x = haploblock_spacers.marker_offset_px + (
							(q * haploblock_spacers.person_offset_px)
							+ (j * haploblock_spacers.block_offset_px) );

					haplo.add( rec );
					ind = iter;
				}
			}
			// For seeing the alignment

	// 		haplo.add( new Kinetic.Line({
	// 			x: (
	// 				haploblock_spacers.marker_offset_px
	// 				+ (q* haploblock_spacers.person_offset_px)
	// 				+ haploblock_spacers.block_width_px
	// 				+ 1),
	// 			y: -200,
	// 			points: [0,0,0,1000],
	// 			strokeWidth:1,
	// 			stroke:'red'
	// 		}));


		}
		grp.add(haplo);


		// Text
		var total_text="";
		for (var m=HaploBlock.sta_index; m <= HaploBlock.end_index; m++)
		{
			total_text += MarkerData.padded[m] + haploblock_buffers.marker_offset;

			for (var i=0; i < HaploBlock.haploinfos.length; i++)
				total_text +=  (haploblock_buffers.ht_offset
								+ HaploBlock.haploinfos[i][0].data_array[m]
								+ haploblock_buffers.ht_2_ht
								+ HaploBlock.haploinfos[i][1].data_array[m]);
			total_text +='\n';
		}

		HaploBlockFormat.format.textprops.text = total_text;
		var texter = new Kinetic.Text(HaploBlockFormat.format.textprops);

		htext = texter;
		grp.add(texter);
		return grp;
	},



	__indexOfNextRecomb(reverse=false)
	{

		var working_array = {}

		var curr_i = reverse?HaploBlock.sta_index:HaploBlock.end_index;
		while (true)
		{
			if (reverse){
				curr_i --;
				if (curr_i < 0){ return 0;}
			} else {
				curr_i ++;
				var last = MarkerData.getLength() - 1;
				if (curr_i > last){ return last;}
			}

			var hap_len = HaploBlock.haploinfos.length;
			for (var p=0; p < hap_len; p++)
			{
				var perc = HaploBlock.haploinfos[p];
				var per_len = perc.length
				for (var a=0; a < per_len; a++)
				{
					var haplo_array = perc[a].haplogroup_array,
						map_index = (p * hap_len) + (a * per_len);

					var current_col = haplo_array[curr_i];
					if (current_col === FounderColor.zero_color_grp){
						continue;
					}

					if (map_index in working_array){
						var prev_col = working_array[map_index]

						if (current_col !== prev_col){
							return curr_i;
						}
					}
					working_array[map_index] = current_col;
				}
			}
		}
		return -1;
	},


	// Better to have to seperate function for forward and back
	// so that onclick events don't pass the evt as first paremeter instead.
	__scrollRecomb(reverse)
	{
		var diff = HaploBlock.end_index - HaploBlock.sta_index;
		var recomb = HaploBlock.__indexOfNextRecomb(reverse);

		if (recomb === -1){
			return -1;
		}

		HaploBlock.sta_index = recomb - parseInt(diff/2);
		HaploBlock.end_index = HaploBlock.sta_index + diff;

		HaploModeEvents.moveHaplotypes();
	},

	scrollToPrevRecomb(){
		HaploBlock.__scrollRecomb(true);
	},
	scrollToNextRecomb(){
		HaploBlock.__scrollRecomb(false);
	}
}



var HaploBlockFormat = {

	hasGPData(show){
		HaploBlockFormat.format.textprops.x = show?-86:-38;
		HaploWindow._group.setX(show?45:0);

		HaploWindow._left.setX(show?-40:10);
		HaploWindow._left.setWidth(show?120:65)
	},

	format: {},

	__default : {
		textprops : {
			x: -38,
			y: -nodeSize*2,
			fontFamily: MarkerSlider._style.I_fontFamily,
			fontSize: 10,
			fill: 'black'
		},
		blockprops : {
			width: haploblock_spacers.block_width_px
		}
	},

	__fancy : {
/*		textprops : {
			strokeWidth: 0.001,
			stroke: 'white',
			shadowColor: 'black',
			shadowOffset: {x:5, y:5},
		},
		blockprops: {
			stroke: '#888',
			strokeWidth: 0.7,
			shadowColor: 'black',
			shadowOffset: {x:5, y:5},
		}*/
	},


	clearFormat : function(){
		HaploBlockFormat.format["textprops"] = {};
		HaploBlockFormat.format["blockprops"] = {};
	},

	applyDefault: function(){

		HaploBlockFormat.clearFormat();

		for (var prop_super in HaploBlockFormat.__default){
			HaploBlockFormat.format[prop_super] = {};

			for (var prop in HaploBlockFormat.__default[prop_super]){
				HaploBlockFormat.format[prop_super][prop] = HaploBlockFormat.__default[prop_super][prop];
			}
		}
	},

	applyFancy: function(){
	
		HaploBlockFormat.applyDefault();

		for (var prop_super in HaploBlockFormat.__fancy){
			for (var prop in HaploBlockFormat.__fancy[prop_super]){
				HaploBlockFormat.format[prop_super][prop] = HaploBlockFormat.__fancy[prop_super][prop];
			}
		}
	}
}
// Founder color groups are unique, even across families

var FounderColor = {

	hgroup : [], // [founder_id], where array index = color/group
	unique : [], // [color --> hex]

	zero_color_grp : -1,

	makeUniqueColors: function(random = false)
	{
		FounderColor.unique = FounderColor.__generateArrays(
			FounderColor.hgroup.length, random
		).rgb;
	},

	clear(){
		FounderColor.hgroup = [];
		FounderColor.unique = [];
	},

	__good_hues : [
		  0,  30,  36,  41,  48,  54,
		 60,  72, 120, 180, 186, 192,
	    204, 240, 262, 276, 288, 300
	],


	__shuffled(array){
		var a = array.slice(0); //clone 
	    var j, x, i;
    	for (i = a.length; i; i--) {
        	j = Math.floor(Math.random() * i);
        	x = a[i - 1];
        	a[i - 1] = a[j];
        	a[j] = x;
    	}
    	return a;
	},


	__evenlySpacedRange: function(req, array)
	{
		var totalnum = array.length;

		if (req > totalnum){
			throw new Error(req+" > "+totalnum);
		}

		var dd = [],
			step = array.length/req;

		for (var b=0; b < array.length; b += step)
		{
			var index = parseInt(b);

			dd.push( array[index] )
		}
		return dd;
	},

	__getColorRange: function(total, random = false){
		var hues = FounderColor.__good_hues,
			huelen = hues.length;

		if (total === 1){
			return hues[huelen/2]
		}

		if (total > huelen){
			throw new Error("Please tier S and V values")
		}

		var range = FounderColor.__evenlySpacedRange(total, hues);

		if (random){
			return FounderColor.__shuffled(range);	
		}

		return range;
	},


	__generateArrays(num_colors, random = false)
	{
		var colours_per_tier = FounderColor.__good_hues.length,
			num_tiers = Math.floor(num_colors / colours_per_tier);

		if (num_colors < colours_per_tier){
			num_tiers = 1;
			colours_per_tier = num_colors
		}
		else if (num_colors % colours_per_tier === 0){
			// nought		
		} else {
			num_tiers += 1;			
		}

		var rgb_array = [],
			hsv_array = [];


		for (var tier=0; tier < num_tiers; tier ++)
		{
			var sat = 50 + (tier * (50/num_tiers)),
				val = 90 - (tier * (80/num_tiers)),
				hue = 0;

			var hues = FounderColor.__getColorRange(colours_per_tier, random)

			for (var c = 0; c < colours_per_tier; c++)
			{
				var index = (tier * colours_per_tier) + c;

				if (index >= num_colors){
					break;
				}
				var hue = hues[c]

				hsv_array.push( [hue,sat,val] )
				rgb_array.push( FounderColor.__hsv2rgb(hue, sat, val) );			
			}
		}
		return {hsv: hsv_array, rgb: rgb_array};
	},

	__hsv2rgb : function HSVtoRGB(h, s, v) {
		var r, g, b, i, f, p, q, t;
		if (arguments.length === 1) {
		    s = h.s, v = h.v, h = h.h;
		}

		h /= 360;
		s /= 100;
		v /= 100;

		i = Math.floor(h * 6);
		f = h * 6 - i;
		p = v * (1 - s);
		q = v * (1 - f * s);
		t = v * (1 - (1 - f) * s);
		switch (i % 6) {
			case 0: r = v, g = t, b = p; break;
			case 1: r = q, g = v, b = p; break;
			case 2: r = p, g = v, b = t; break;
			case 3: r = p, g = q, b = v; break;
			case 4: r = t, g = p, b = v; break;
			case 5: r = v, g = p, b = q; break;
		}
	    r = Math.round(r * 255);
	    g = Math.round(g * 255);
	    b = Math.round(b * 255);

		return FounderColor.__rgb2hex(r,g,b);
	},

	__rgb2hex : function rgbToHex(r, g, b) {
    	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	},

	// Purely testing:
	__testcontainer : null,
	testColors: function(n=36, step = true){

		var hsv_and_rgb = FounderColor.__generateArrays(n),
			hsv_array = hsv_and_rgb.hsv,
			rgb_array = hsv_and_rgb.rgb;

		console.log(hsv_and_rgb)


		//Display
		if (FounderColor.__testcontainer !== null){
			while(FounderColor.__testcontainer.firstChild){
				FounderColor.__testcontainer.removeChild(FounderColor.__testcontainer.firstChild);
			}
			FounderColor.__testcontainer.parentNode.removeChild(FounderColor.__testcontainer)
		}
		var container = document.createElement('div'),
			glen = (!step || n < FounderColor.__good_hues.length)?n:FounderColor.__good_hues.length;
			general_width = parseInt((window.innerWidth / glen)*0.99);

		container.style.background = "white";
		container.style.position = "absolute";
		container.style.left = "10px";
		container.style.top = "10px";
		container.style.width = glen*general_width + "px";

		for (var a=0; a < rgb_array.length; a++){
			var col = document.createElement("div");

			function sets(g){
				console.log(rgb_array[g]+" --> "+hsv_array[g])
			};

			col.style.background = rgb_array[a];
			col.style.width = general_width + "px";
			col.style.height = "100px";
			col.style.float = "left";
			col.onclick = sets.bind(this, a);

			container.appendChild(col);
		}
		FounderColor.__testcontainer = container;

		document.body.appendChild(container);
	}
}


















// 		// This accentuates more easily distinguishable colours using a stepped hue gradient
// 		stepped : function(fract){   // [0,1] --> [0,16]  -- 16 is how the coeffs were derived...
// 			var c = [	// Coeffs:
// 				-3.07674557236884E-05, 	//	x^7
// 				-0.000459011980079,		//	x^6
// 				0.061300309597543,		//	x^5
// 				-1.26960404651228,		//	x^4
// 				10.6469387121164,		// 	x^3
// 				-36.8885440632869,		//	x^2
// 				58.3413936178228,		//	x
// 				0		//  y-inter
// 			];

// 			if (fract > 1 || fract < 0){
// 				throw new Error("Bad fract", fract)
// 			}

// 			var x = fract * 16,
// 				hue = (  c[0]*Math.pow(x,7)
//  					+c[1]*Math.pow(x,6)
// 	    				+c[2]*Math.pow(x,5)
// 		    			+c[3]*Math.pow(x,4)
// 			    		+c[4]*Math.pow(x,3)
// 				    	+c[5]*Math.pow(x,2)
// 					    +c[6]*x
// 		    			+c[7] );

// 			if (hue < 0){ hue = 0;}

// 			return parseInt(hue);
// 		},

// 		linear: function(fract){
// 			if (fract > 1 || fract < 0){
// 				throw new Error("Bad fract", fract)
// 			}

// 			return parseInt(fract * 300); // hue between 300-360/0 are essentially the same colour...
// 		}
// 	},



var init = {

	clearMaps: function(){
		familyDraw.active_fam_group = null;
		
		FounderColor.clear();
		GlobalLevelGrid.clear();
		MarkerData.clear();
		familyMapOps.clear();
		uniqueGraphOps.clear();
	},

	haploview : {

		allegro : function(){
			(new Allegro());
		},

		genehunter: function(){
			(new Genehunter()); // yeah "new" is required...
								// gc does its job
		},

		simwalk: function(){
			(new Simwalk());
		},

		merlin: function(){
			//utility.notify("TODO", "merlin");
			(new Merlin());
		}
	},

	pedcreate : function(){
		HaploPedProps.init();
		graphInitPos(nodeSize + 10, grid_rezY, true);
	}
}


MainPageHandler.defaultload();
/*Drawing a pedigree - trickier than you'd think, simple draw rec messes up lines

Steps:
   1. Make a grid
   2. Recurse nodes
      - toplevel nodes are downshifted by existence of parents
      - place under a male-then-female order.
        - for extra mates, that is [male,female,female,...] or [male,male,...,female]
   3. Render nodes top-down from grid under parental placement
   4. Populate unique edges and render after
  - Allowed edges: [0]parent-mate, [1] parent-to-parentline, [2] child-to-parentline
  - Struct: { 0: horiz line
              1: parent_line:
                      connector from center of PAR_i and PAR_j extending down vert line
                      initiated from parent on parent.children.length > 0,
              2: child_conn :
                      connector from child to parent_line}

Notes:
   * Main intersect problems are x-specific, no need to worry about generations
   * Minimal drawing graph is then peds + unique_edges, and we can use that graph
     for all future draws (moving, dragging, etc)

*/


function graphicsShow(show = true){

	uniqueGraphOps.foreachnode(function(pid,fid,node){
		show?node.graphics.show():node.graphics.hide();
	});

	uniqueGraphOps.foreachedge(function(pid,fid,edge){
		show?edge.graphics.show():edge.graphics.hide();
	});
	main_layer.draw();
}





// After populating, add graphics
function graphInitPos(start_x, start_y, enable_ped_edit = false){

	var x_shift_fam = 0,
		y_start = 10,
		max_fam_width = 160;

	GlobalLevelGrid.foreachfam(function(grid, fam){
		// Each fam gets their own group
		var fam_group;

		if (uniqueGraphOps.famExists(fam) && uniqueGraphOps.getFam(fam).group !== null){
			fam_group = uniqueGraphOps.getFam(fam).group;
		}
		else {
			fam_group = Graphics.Pedigree.addFamily(fam, x_shift_fam, y_start);
		}

		var max_x = 0;

		var fam_gfx = uniqueGraphOps.getFam(fam);
		fam_gfx.group = fam_group

		// Descending down the generations.
		// Main founders are at top
		var y_pos = start_y,
			nodes = fam_gfx.nodes,
			edges = fam_gfx.edges;


		// Load stored meta
		familyMapOps.foreachperc(function(pid, fid, perp){

			var n_perp = uniqueGraphOps.getNode(pid, fid);

			// Restore meta
			var posx = -1, 
				ypos = -1;

			if (typeof perp.stored_meta !== "undefined"){
				//console.log("using stored meta", perp_id, perp.stored_meta);
				var meta = perp.stored_meta;

				posx  = meta.x;
				y_pos = meta.y;

				perp.name = meta.name;

				delete perp.stored_meta;

				if (perp.mother === 0 && perp.father === 0){
	
					n_perp.graphics = Graphics.Pedigree.addPerson(perp, fam_group, posx, y_pos);
					console.log("adding", n_perp.graphics);

					if (enable_ped_edit){
						n_perp.graphics.family = fam;
					 	personDraw.addClickFunctions(n_perp.graphics);
			 		}
			 	}
			}
		});

		//debugger


		// Init Nodes, ordered by generation
		GlobalLevelGrid.foreachgeneration(fam, function(indivs_in_gen){

			var x_pos = start_x;

			var num_peeps = indivs_in_gen.length,
			    isOddNum = !((num_peeps%2)==0),
			    center_x = Math.floor(max_fam_width/2);


			/*
			Everyone is spaced one horiz_space apart, but centred:
			-	odd number of people in a row: centre middle perp
			-	even number of people in a row: space middle two half horiz_space from center
			and then expand out
			*/

			//Can't be helped, JS doesn't support macros... mendokuse na...
			function placePerp(index, posx){
				var perp_id = indivs_in_gen[index],
					perp = familyMapOps.getPerc(perp_id, fam),
					n_perp = nodes[perp_id];

				// Restore meta
				if (typeof perp.stored_meta !== "undefined"){
					//console.log("using stored meta", perp_id, perp.stored_meta);
					var meta = perp.stored_meta;

					posx = meta.x;
					y_pos = meta.y;

					perp.name = meta.name;

					delete perp.stored_meta;
				}
				else {
					// Center on parent's positions
					var moth = perp.mother,
						fath = perp.father;

					// Parent's exist and offsrping is only child
					if (moth !== 0 && moth.children.length === 1){
						var moth_gfx = nodes[moth.id].graphics.getX(),
							fath_gfx = nodes[fath.id].graphics.getX();

						posx = (moth_gfx + fath_gfx) / 2 ;
					}
				}


				n_perp.graphics = Graphics.Pedigree.addPerson(perp, fam_group, posx, y_pos);
				//console.log("addding", n_perp.graphics);

				if (enable_ped_edit){
					n_perp.graphics.family = fam;
				 	personDraw.addClickFunctions(n_perp.graphics);
		 		}


// 				posx  = Math.floor(posx/grid_rezX)*grid_rezX;
// 				y_pos = Math.floor(y_pos/grid_rezY)*grid_rezY;

				if(posx > max_x) max_x = posx;
			}

			var start1, start2;

			if (isOddNum)
			{
				var center_ind = Math.floor(num_peeps/2);
				placePerp(center_ind, center_x);

				//Expansion
				var tmp1 = center_ind,
					tmp2 = center_ind;

				start1 = center_x,
				start2 = center_x;

				while(tmp1 > 0){
					placePerp(--tmp1, start1 -= horiz_space);
					placePerp(++tmp2, start2 += horiz_space);
				}
			}
			else {
				var center2_ind = (num_peeps/2),
					center1_ind = center2_ind - 1;

				//Expansion
				var tmp1 = center2_ind,
					tmp2 = center1_ind;

				start1 = center_x + Math.floor(horiz_space/2);
				start2 = center_x - Math.floor(horiz_space/2);

				while (tmp1 > 0){
					placePerp(--tmp1, start1 -= horiz_space);
					placePerp(++tmp2, start2 += horiz_space);
				}
			}

			y_pos += vert_space + 25;

		});


		// Init Edges -- in order of Mateline, and Childline
		for (var tp = 0; tp <= 2; tp ++){

			for(var key in edges)
			{
				var edge = edges[key],
					type = edge.type,
					end_join_id = edge.end_join_id,
					start_join_id = edge.start_join_id;

				if (type !== tp) continue;

				var	start_pos, end_pos,
					consang = false;


				if(type === 0){
					// Mateline
					start_pos = nodes[start_join_id].graphics.getPosition();
					end_pos = nodes[end_join_id].graphics.getPosition();
					consang = checkConsanginuity(fam, start_join_id, end_join_id);
				}
				else if(type === 2)
				{
					// Childline
					var mateline_points = edges[start_join_id].graphics.getPoints(),
						child_pos       = nodes[  end_join_id].graphics.getPosition();

					start_pos = {
						x: Math.floor((mateline_points[0] + mateline_points[2])/2),
						y: mateline_points[1]
					};
					end_pos = {	x: child_pos.x,	y: child_pos.y	};
				}

				else console.assert(false,"Wrong type! "+key+", type= "+type);


				edge.graphics = Graphics.Lines.addRLine(fam_group, start_pos, end_pos, consang); 					//DRAW
				edge.consangineous = consang;

				edge.graphics.moveToBottom();
			}
		}
		x_shift_fam += max_x + 20;
	});

	// --- Placement Positions
	if (isEmpty(Pedfile.__tmpfamdata)){
		// Space automatically
		FamSpacing.init(20);		
	}
	else {
		// Use stored positions
		for (var fam in Pedfile.__tmpfamdata)
		{
			var pos = Pedfile.__tmpfamdata[fam],
				fgr = uniqueGraphOps.getFam(fam).group;

			fgr.setX(pos.x);
			fgr.setY(pos.y);
		}
		Pedfile.__tmpfamdata = {}; //clear
	}

	// --- Determine Bounds for each fam after final placements
	uniqueGraphOps.foreachfam(function(fid,fgr){
		Graphics.Pedigree.updateFamBoundsRect(fgr.group);
		fgr.group._boundsrect.hide();
	});

	Resize.resizeCanvas();


	// --- Placement Animations
	if (userOpts.fancyGraphics){
		// Solitaire
		graphicsShow(false)
		FancyGraphics.init(); // init performs a graphics show on each node
	}
	else {
		touchlines();
		main_layer.draw();
	}
}


// Find highest founder - A* best-first search
function checkConsanginuity(fam_id, pers1_id, pers2_id)
{
    var fam_map = familyMapOps.getFam(fam_id),
        pers1 = fam_map[pers1_id],
        pers2 = fam_map[pers2_id];

    // Find pers1 founder
    var routes2 = [];
    routes2.push( pers1 );
    routes2.push( pers2 );

    //console.log("routes2=", pers1_id, pers2_id);

     // = [pers1, pers2];

    var complete = [],
    	loopnum = 0;

    // console.log(pers1.id+"  and  "+pers2.id);
    while(routes2.length > 0 && loopnum++ < 100){

        	var perc = routes2.shift(); // remove from search

/*        	if (perc === undefined){
        		
        	}
*/
        	//Try mother + father
	        if (perc.mother === 0 && perc.father === 0){
	        	complete.push(perc.id);
	        	continue;
	        }

        	if (perc.mother != 0) routes2.push(perc.mother);
        	if (perc.father != 0) routes2.push(perc.father);

        	// console.log(" routes=", routes2.map( function(n){ return n.id;}));
    }
    // console.log("complete=", complete);

    //Find duplicates in complete
    complete = complete.sort();
    for (var a=0; a < complete.length -1; a++){
    	if (complete[a+1] === complete[a])
    		return true;
    }

    return false;
}



var HaploPedProps = {

	xlinked: null,
	dominant: null,

	// Affecteds in each generation --> dominant
	// if males have one allele --> sexlinked (easy):
	//      if males have two alleles, but one of them is always zero --> sexlinked
	//
	// extra (unnecesary) checks:
	//      if dominant and male-to-male transmission --> autosomal
	//      if recessive and males are hemizygous and not all females are affected --> sexlinked

	// We assume that all pedigrees are on the same chromosome -- pick the largest to examine.

	init: function(hookfunc = null)
	{
		HaploPedProps.connectAll();

		// Genehunter can infer genders at this stage
		if(hookfunc !== null){
			hookfunc();
		}

		HaploPedProps._populateGraphics(); /*Maybe doesn't need to be in this class, but MUST be after _connectAll */

		var fam_id = HaploPedProps._largestPedigree();

		HaploPedProps.dominant = HaploPedProps._determineDominant(fam_id);
		HaploPedProps.xlinked  = HaploPedProps._determineXlinked(fam_id);

		if (HaploPedProps.xlinked){
			HaploPedProps._correctAllMaleAlleles();
		}

		utility.notify("Pedigree", 
			 (HaploPedProps.xlinked?"X-Linked":"Autosomal") 
			+ " "
			+(HaploPedProps.dominant?"Dominant":"Recessive")
		);

	},

	connectAll: function connectAllIndividuals()
	{
		familyMapOps.foreachperc(function(id,famid, new_root)
		{
			//Assign father and mother to actual people
			var pers_father = 0, pers_mother = 0;

			if (new_root.father != 0) {
				pers_father = familyMapOps.getPerc(new_root.father, famid);

				new_root.father = pers_father;         // Add father to child
				pers_father.addChild(new_root);   // And child to father
			}

			if (new_root.mother != 0){
				pers_mother = familyMapOps.getPerc(new_root.mother,famid);

				new_root.mother = pers_mother;         // Add mother to child
				pers_mother.addChild(new_root);   // And child to mother
			}

			if (pers_father != 0 )                     //Add parents as mates to each other
				if(pers_mother != 0) pers_father.addMate(pers_mother);
				else pers_father.addMate(0);

			if (pers_mother !=0 )
				if(pers_father != 0) pers_mother.addMate(pers_father);
				else pers_mother.addMate(0);
		});
	},

	_largestPedigree : function(){
		var max_memb=0, max_fam=0;

		familyMapOps.foreachfam(function(fid){
			var num_memb = familyMapOps.numPercs(fid);

			if (num_memb > max_memb){
				max_memb = num_memb;
				max_fam = fid;
			}
		});
		return max_fam;
	},

	_determineXlinked : function singleAlleleMale(fam_id){
		var all_zero_Ychroms = 0;
		var num_males_checked = 0;

		var num_males_with_single_allele = 0;

		familyMapOps.foreachperc(function(perc_id, perc){
			var skip_uninformative = false;

			//Determine if Y allele is zero for ALL males (not just one)
			if ( perc.gender == PED.MALE ){
				if (perc.haplo_data.length == 1)
					num_males_with_single_allele ++;

				else {
					var num_all_zero_alleles = 0;

					for (var a=0; a < perc.haplo_data.length; a++){
						var all_zeroes = true;

						for (var i=0; i < perc.haplo_data[a].data_array.length; i++ ){
							if (perc.haplo_data[a].data_array[i] !== 0){
								all_zeroes = false;
								break;
							}
						}
						if (all_zeroes){
							num_all_zero_alleles ++;
						}
					}
					if (num_all_zero_alleles === 2){ // skip this guy, completely uninformative
						skip_uninformative = true;  
					}
					else{
						all_zero_Ychroms += num_all_zero_alleles;					
					}
				}
				if (!skip_uninformative){
					num_males_checked ++;
				}
			}			
		}, fam_id);

		if (num_males_with_single_allele === num_males_checked){return true};
		if (all_zero_Ychroms === num_males_checked){return true};
		if (num_males_with_single_allele + all_zero_Ychroms === num_males_checked){return true};

		return false;
	},


	_determineDominant: function checkAffectedsInGens(fam_id)
	{
		var affected_in_each_gen = 0,
			num_gens = GlobalLevelGrid.numGens(fam_id);

		GlobalLevelGrid.foreachgeneration(fam_id, function(indivs_in_gen){
			var affecteds_in_gen = 0;

			for (var p=0; p < indivs_in_gen.length; p++){
				var perc_id = indivs_in_gen[p],
					perc = familyMapOps.getPerc(perc_id,fam_id);

				if (perc.affected === PED.AFFECTED){
					affecteds_in_gen ++;
				}
			}
			if (affecteds_in_gen > 0){ affected_in_each_gen ++ };
		});

		return affected_in_each_gen === num_gens;
	},


	_correctAllMaleAlleles: function addZeroAllele_for_sexlinkedMales()
	{
		familyMapOps.foreachperc(function(pid, fid, perc)
		{
			if (perc.gender === PED.MALE && perc.haplo_data.length === 1)
			{
				var len_of_allele = perc.haplo_data[0].data_array.length,
					new_allele = [];

				for (var i=0; i < len_of_allele ; i++){
					new_allele.push(0);
				}

				perc.haplo_data.push(new Allele(new_allele))
			}
		});
	},


	_populateGraphics: function populateGrids_and_UniqueObjs() {

		console.groupCollapsed("Populate Graphics")

		//First root indiv for each family -- all members must be connected!
		familyMapOps.foreachfam(function(fam_id){

			//Populate gridmap and uniq map		
			var nodes_edges = (new GraphicsLevelGrid(fam_id, null)).getMap();
			var generation_array = GlobalLevelGrid.getGrid(fam_id);

	//		console.log( generation_array, uniq_objs);

			//Insert into global maps
			uniqueGraphOps.insertFam(fam_id, null);
			uniqueGraphOps.getFam(fam_id).nodes = nodes_edges.nodes;
			uniqueGraphOps.getFam(fam_id).edges = nodes_edges.edges;

			GlobalLevelGrid.updateGrid(fam_id, generation_array);


			// Check if root tree contains ALL individuals
			var num_peeps = familyMapOps.numPercs(fam_id),
				num_nodes = -1; // skip 0 indiv	

			for (var node in nodes_edges.nodes){num_nodes ++;}


			if (num_nodes !== num_peeps){
				console.log("[Warning] Family "+fam_id
					+" has only mapped "+num_nodes
					+" individuals out of "
					+ num_peeps
				);

				// This is where we need to manually insert the 
				//  other non-connected individuals

				familyMapOps.foreachperc(function(perc_id, perp){
					if (!(perc_id in nodes_edges.nodes)){
				
						// Restore meta
						if (typeof perp.stored_meta !== "undefined"){
							console.log("using stored meta", perc_id, perp.stored_meta);
							var meta = perp.stored_meta;

							uniqueGraphOps.insertNode(perc_id, fam_id, null);

							// This is complicated -- essentially the pedigree in haplo view and pedcreate have
							// different onclick functions, so I need to actually iterate through the pedigree
							// manually for each person and set their graphics that way.
							//  Basically ._populateGraphics only should apply to haploview mode and I need
							// to create my own way of parsing saved pedigrees.
							
							console.log("HERE", perp.stored_meta);
							delete perp.stored_meta;
						}
					}
				}, fam_id);
			}
		});
		console.groupEnd();
	}
}

var FlowResolver = {

	unique_haplos : [], // accessed by Merlin


	// 'A' 'B' 'C' alone are unique only to family, so we add family magic
	convertGroupsToFamilySpecific(data, fam){
		for (var v = 0; v < data.length; v++)
		{
			var alpha = data[v] + '--' + fam;

			if (FlowResolver.unique_haplos.indexOf(alpha) === -1){
				FlowResolver.unique_haplos.push(alpha);
			}
			data[v] = FlowResolver.unique_haplos.indexOf(alpha);
		}
	},
	

	initFounderAlleles : function(){
		FounderColor.hgroup = FlowResolver.unique_haplos;
	},

	child2parent_link: function(child, mother, father, fam){
		
//		console.log(child, mother, father)

		var chil_allele1 = child.haplo_data[0],
			moth_allele1 = mother.haplo_data[0],
			fath_allele1 = father.haplo_data[0];


		var chil_allele2 = child.haplo_data[1],
			moth_allele2 = mother.haplo_data[1],
			fath_allele2 = father.haplo_data[1];


		//console.log("Attempting", child.id, fam, chil_allele1.pter_array, chil_allele1.flow)

		var i = -1
		while(++i < chil_allele1.flow.length)
		{
			// Map allele.flow -> allele.pter_array	color group array
			chil_allele1.pter_array[i].color_group = [chil_allele1.flow[i]];
			moth_allele1.pter_array[i].color_group = [moth_allele1.flow[i]];
			fath_allele1.pter_array[i].color_group = [fath_allele1.flow[i]];
			
			chil_allele2.pter_array[i].color_group = [chil_allele2.flow[i]];
			moth_allele2.pter_array[i].color_group = [moth_allele2.flow[i]];
			fath_allele2.pter_array[i].color_group = [fath_allele2.flow[i]];

			//console.log(i, fam, child.id, mother.id, father.id)

		}

		//console.log("Result?", child.id, fam, chil_allele1.pter_array, chil_allele1.flow)
	}
}

var DescentResolver = {

	child2parent_link: function(child, mother, father, fam){

		var chil_hp = child.haplo_data,
			moth_hp = mother.haplo_data,
			fath_hp = father.haplo_data;


		// We assume paternal is 1st, and maternal is 2nd allele
		var m1_gts = moth_hp[0].data_array,		m2_gts = moth_hp[1].data_array,
			f1_gts = fath_hp[0].data_array,		f2_gts = fath_hp[1].data_array,
			c1_gts = chil_hp[0].data_array,		c2_gts = chil_hp[1].data_array;

		var m1_des = moth_hp[0].descent,	m2_des = moth_hp[1].descent,
			f1_des = fath_hp[0].descent,	f2_des = fath_hp[1].descent,
			c1_des = chil_hp[0].descent,	c2_des = chil_hp[1].descent;

		var m1_cls = moth_hp[0].pter_array,	m2_cls = moth_hp[1].pter_array,
			f1_cls = fath_hp[0].pter_array,	f2_cls = fath_hp[1].pter_array;


		// To be assigned
		var c1_cls = chil_hp[0].pter_array,	c2_cls = chil_hp[1].pter_array;


		var index = -1

//		console.log("Processing...", child, mother, father)

		while (++index < c1_gts.length)
		{
			var c1_ht = c1_gts[index],		c1_ds = c1_des[index],
				c2_ht = c2_gts[index],		c2_ds = c2_des[index];

			var m1_col = m1_cls[index],		m2_col = m2_cls[index],
				f1_col = f1_cls[index],		f2_col = f2_cls[index];

			var m1_ht = m1_gts[index],		m2_ht = m2_gts[index],
				f1_ht = f1_gts[index],		f2_ht = f2_gts[index];


			if (f1_ht === 0) f1_col.color_group = [FounderColor.zero_color_grp];
			if (f2_ht === 0) f2_col.color_group = [FounderColor.zero_color_grp];
			if (m1_ht === 0) m1_col.color_group = [FounderColor.zero_color_grp];
			if (m2_ht === 0) m2_col.color_group = [FounderColor.zero_color_grp];

			// Do paternal (1st)
			var color_assign_c1 = -1

			switch(c1_ds){
				case 0: color_assign_c1 = -1; break;

				case 1: 
					color_assign_c1 = f1_col.color_group;
					if (c1_ht !== f1_ht){
						throw new Error("Inconsistent HTs [c1,f1]: " + c1_ht + " != " + f1_ht);
					}
					break;
				
				case 2: 
					color_assign_c1 = f2_col.color_group;
					if (c1_ht !== f2_ht){
						throw new Error("Inconsistent HTs [c1,f2]: " + c1_ht + " != " + f2_ht);
					}
					break;

				default: throw new Error("Invalid descent assignment");
			}
			c1_cls[index].color_group = color_assign_c1

			

			// Do maternal (2nd)
			var color_assign_c2 = -1

			switch(c2_ds){
				case 0: color_assign_c2 = -1; break;

				case 1: 
					color_assign_c2 = m1_col.color_group;
					if (c2_ht !== m1_ht){
						throw new Error("Inconsistent HTs [c2,m1]: " + c2_ht + " != " + m1_ht);
					}
					break;
				
				case 2: 
					color_assign_c2 = m2_col.color_group; 
					if (c2_ht !== m2_ht){
						throw new Error("Inconsistent HTs [c2,m2]: " + c2_ht + " != " + m2_ht);
					}
					break;

				default: throw new Error("Invalid descent assignment");	
			}
			c2_cls[index].color_group = color_assign_c2;
		}
	}
}






var a_star_bestfirst__DEBUG = function(array, exclude_list)
{
	// Define excludelist function
	var inExcludeList;

	if (exclude_list === undefined || exclude_list.length === 0)					// No list given
		inExcludeList = function (item){return false;};

	else if ( (typeof exclude_list) === 'number')									// Single item given
		inExcludeList = function (item){ return item === exclude_list;};

	else if (exclude_list.length === 1){ 											// Single array item
		exclude_list = exclude_list[0];
		inExcludeList = function (item){ return item === exclude_list;};
	}

	else 								 											// Whole list given
		inExcludeList = function (item){ return (exclude_list.indexOf(item) !== -1);};


	var end = array.length -1;

	var MAX_ROUTES = 4;    // maximum amount of working routes

	var exploring_routes = [{array:[],numsets:0}],	// initial zero route
		complete_routes = [];

	var route_map = {}; // routes explored already

	var num_cycles = 0;

	// Initially discard any colors that stretch only for a single index
	var stretches_only = true;


	while (true){

		while (exploring_routes.length !== 0)
		{
			num_cycles ++;
			exploring_routes = exploring_routes.sort(function (a,b){ return b.array.length - a.array.length;}).slice(0,MAX_ROUTES);

			// Current open route
			var current_route = exploring_routes[0].array,
				current_nsets = exploring_routes[0].numsets,
				current_row = current_route.length;

			// Various routes at this row
			var num_colors = array[current_row].color_group.length;

			console.log("-Route:", current_route);
			console.log("    current_row=" + current_row);
			console.log("    num_colors =", num_colors);

			var ordered_routes = {},
				zero_indexes = {};

			// Look ahead by one
			for (var c=0; c< num_colors; c++){
				var current_color = array[current_row].color_group[c];

				console.log("    - trying color "+current_color);

				if (inExcludeList(current_color)){
					console.log("    - EXCLUDE!");
					continue;
				}

				//Perform look ahead
				var stretch = current_row + 1;
				while ( stretch <= end )
				{
					var new_colors = array[stretch].color_group;
					console.log("       - testing "+current_color+" against "+new_colors+" @i "+stretch);

					// Only break on another non-zero group color
					if (new_colors.indexOf(current_color) === -1){
						if (new_colors.length === 1 && new_colors[0] === FounderColor.zero_color_grp){
							zero_indexes[stretch] = 0;
						}
						else { //not a zero group
							break;
						}
					}

					stretch ++;
				}
				stretch -= current_row;

				console.log("    - stretches for ",stretch, "before index", stretch + current_row);

				// Store color with key as the length of the stretch
				ordered_routes[ stretch ] = current_color;
			}
			var keys_rev_ord = Object.keys(ordered_routes).sort(function(a,b){return b-a});

			console.log("    ordered_routes=", ordered_routes);
			console.log("    reversed_order=", keys_rev_ord);

			// Add routes to current route
			for (var k=0; k < keys_rev_ord.length; k++){

				var key = keys_rev_ord[k];

				// No sig. change
				if (stretches_only && key <= 1 ){
					// Dead end route
					console.log("    dead_end route, skipping");
					continue;
				}



				var new_r = current_route.slice(); 			//clone a new path for each fork

				var len = key;
				while(len --> 0)
					new_r.push(  ordered_routes[key] ); 	// push the color k times

				console.log("   - adding '"+ordered_routes[key]+"' "+key+"x  to ", new_r);

				//Add the zeros
 				for (var z_index in zero_indexes){
					if (new_r.length > z_index)
 						new_r[ z_index ] = FounderColor.zero_color_grp;
 				}

				var new_pack = {array: new_r, numsets:current_nsets+1};
				var string_key = new_r.reduce( function(a,b){ return a+""+b;});

				if (!(string_key in route_map)){
					route_map[string_key] = 0;

					if (new_r.length === array.length)
						complete_routes.push( new_pack ); // fin
					else
						exploring_routes.push( new_pack ); // push the new path if unique
				}
			}

			// Remove old route (now expanded)
			exploring_routes.splice(0,1);
			zero_indexes = {};

			console.log("    explored="+exploring_routes.map(function (n){ return "["+n.array+"] "}));
			console.log("    complete="+complete_routes.map(function (n){ return "["+n.array+"] "}));
		}

		// Do we have results?
		if (complete_routes.length === 0){
			if (stretches_only){
				stretches_only = false; 	// Next iter on array tries for single indexes
				console.log("repeating without stretches");

				// reset
				complete_routes = [];
				exploring_routes = [{array:[],numsets:0}];
				route_map = {};

				continue;
			}

			// console.error(arguments);


			// return a_star_bestfirst__DEBUG(array);
			return null;

		}
		break;
	}
 	var best;

 	if (complete_routes.length === 1)
		best = complete_routes[0].array;
 	else
 		best = complete_routes.sort( function (a,b) { return a.numsets - b.numsets;})[0].array;

	console.log("best_routes A*", complete_routes);
	console.log(" with best=", best);
	console.log("  in "+num_cycles+" cycles");

	console.log("SRC ARRAY=",array.map(function (a){return ""+a.color_group+"";}));

	return best;
}


var starbest_body = (function() {
	var entire = a_star_bestfirst__DEBUG.toString();

	return entire.slice(entire.indexOf("{")+1, entire.lastIndexOf("}"));
})();


var strre = starbest_body.replace(/console\.log\(.*\)\;/g,"");

var a_star_bestfirst = new Function(
	'array',
	'exclude_list',
	strre
);


// var	array = [
// 	[4,2,6],
// 	[2,6],
// 	[2,7],
// 	[7],
// 	[4,7],
// 	[3,7]];

// var array = [
// 	[2,6],[2],[2,6],[2,6],[2],[2,6],[2],[2,6],[2],[2],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2],[2,6],[2],[2,6],[2,6],[2],[2],[2,6],[2],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2,6],[2],[2],[2,6],[2,6],[2,6],[2],[2,6],[2],[2],[2,6],[2,6],[2],[2,6],[2],[2,6],[2,6],[2,6],[2],[2,6],[2,6],[2,6],[2,6],[2],[2,6],[2]];

// array = array.map(function(n){return {color_group:n};});

// a_star_bestfirst__DEBUG(array,[]);


var AstarHandler = {

	/** Inherit all unique color groups from one person to another **/
	pushAll: function(from, to){
		// 	console.log("called", from, to);
		for (var j=0; j < from.color_group.length; j++){
			if (to.color_group.indexOf( from.color_group[j] )==-1)
				to.color_group.push( from.color_group[j] );
		}
	},

	/** Reset search if incompatible genotypes **/
	resetCheck: function(p1,p2){
		var reset = (p1.color_group.length === 0 || p2.color_group.length === 0);
		if (reset){
			p1.color_group = [];
			p2.color_group = [];
		}
	},


	/*  Links non-founders to founders via parents. Potentially unphased, no error-checking at this stage

	Some assumptions:
	- Founder pointers are already set (for founders)
	- Always two alleles
	- Paternal allele is first, and maternal is second (though the other way around works just
	  as well, as long as they're phased.)
	*/
	child2parent_link: function(pers, moth, fath, fam) // fam only needed for consang check.
	{
		var pers_hp = pers.haplo_data,
			moth_hp = moth.haplo_data,
			fath_hp = fath.haplo_data,
			gender = pers.gender;

		console.assert(pers_hp[0].data_array.length === moth_hp[0].data_array.length
		    && pers_hp[0].data_array.length === fath_hp[0].data_array.length
			&& pers_hp[1].data_array.length === moth_hp[1].data_array.length
			&& pers_hp[1].data_array.length === fath_hp[1].data_array.length, "Allele lengths dont match for moth,fath,chil:"+ moth.id+" "+fath.id+" "+pers.id);

		var tmp_i = -1;

		while (++tmp_i < pers_hp[0].data_array.length)
		{
			// Each persons allele is one of four possible parental alleles (autosomal)
			var f0_ht = fath_hp[0].data_array[tmp_i],
				f1_ht = fath_hp[1].data_array[tmp_i],  // Y allele, potential pitfall here -- input rows either follow a specific XY order, or need to do postproc.
				m0_ht = moth_hp[0].data_array[tmp_i],
				m1_ht = moth_hp[1].data_array[tmp_i];

			var f0_pr = fath_hp[0].pter_array[tmp_i],
				f1_pr = fath_hp[1].pter_array[tmp_i],
				m0_pr = moth_hp[0].pter_array[tmp_i],
				m1_pr = moth_hp[1].pter_array[tmp_i];

	// 		if (f0_pr === undefined || f1_pr === undefined
	// 			|| m0_pr === undefined || m1_pr === undefined)

			if (f0_ht === 0) f0_pr.color_group = [FounderColor.zero_color_grp];
			if (f1_ht === 0) f1_pr.color_group = [FounderColor.zero_color_grp];
			if (m0_ht === 0) m0_pr.color_group = [FounderColor.zero_color_grp];
			if (m1_ht === 0) m1_pr.color_group = [FounderColor.zero_color_grp];

	// 		if (f0_ht === f1_ht  && f1_ht === m0_ht	&& m0_ht === m1_ht  && m1_ht === 0) continue;

			var c0_ht = pers_hp[0].data_array[tmp_i],  				// X allele
				c1_ht = pers_hp[1].data_array[tmp_i];  				// Y allele

			var c0_pr = pers_hp[0].pter_array[tmp_i],
				c1_pr = pers_hp[1].pter_array[tmp_i]; 				// Y pointer

			if (c0_pr.color_group.length !== 0 ){
				console.log("c0_pr not [], for "+pers.id+" @ "+tmp_i, c0_pr);
				throw new Error("");

			}

			if (c1_pr.color_group.length !== 0 ){
				console.log("c1_pr not [], for "+pers.id+" @ "+tmp_i, c1_pr);
				throw new Error("");
			}


			/* -- Sex-linked and male scenario:
	   		 Assuming XY and XX are alleles 0 1 2 3;
			  female: 0{2,3} = 02 03
			    male: 1{2,3} = 12 13
			 */
			if (HaploPedProps.xlinked && gender === PED.MALE){ 						 // Sexlinked and male

				// console.log("Extra work for", pers.id);

				// MASSIVE ASSUMPTIONS HERE:
				// - The child's (male) second allele is the Y chrom, as is the father's
				// - Only true if input file is set as such for males.

				AstarHandler.pushAll(f1_pr,c1_pr);

				if (c0_ht === m0_ht) AstarHandler.pushAll(m0_pr, c0_pr); // Maternal set both
				if (c0_ht === m1_ht) AstarHandler.pushAll(m1_pr, c0_pr);

				continue;
			}

			/*
			-- Autosomal or female scenario
			with the condition that the opposing allele must be chosen from the remaining sister pair:
			e.g: {0,1}{2,3} = 02 03 12 13

			*/
			if (c0_ht === f0_ht){ 						   // Add 0
				AstarHandler.pushAll(f0_pr, c0_pr);

				if (c1_ht === m0_ht) AstarHandler.pushAll(m0_pr, c1_pr);// 02 scen;
				if (c1_ht === m1_ht) AstarHandler.pushAll(m1_pr, c1_pr);// 03 scen;
			}
			AstarHandler.resetCheck(c0_pr,c1_pr);


			if (c0_ht === f1_ht){ 		 					// Add 1
				AstarHandler.pushAll(f1_pr, c0_pr);

				if (c1_ht === m0_ht) AstarHandler.pushAll(m0_pr, c1_pr); // 12 scen;
				if (c1_ht === m1_ht) AstarHandler.pushAll(m1_pr, c1_pr); // 13 scen;
			}
			AstarHandler.resetCheck(c0_pr,c1_pr);


			if (c0_ht === m0_ht){ 		 					// Add 2
				AstarHandler.pushAll(m0_pr, c0_pr);

				if (c1_ht === f0_ht) AstarHandler.pushAll(f0_pr, c1_pr); // 20 scen;
				if (c1_ht === f1_ht) AstarHandler.pushAll(f1_pr, c1_pr); // 21 scen;
			}
			AstarHandler.resetCheck(c0_pr,c1_pr);

			if (c0_ht === m1_ht){ 		 					// Add 3
				AstarHandler.pushAll(m1_pr, c0_pr);

				if (c1_ht === f0_ht) AstarHandler.pushAll(f0_pr, c1_pr); // 30 scen;
				if (c1_ht === f1_ht) AstarHandler.pushAll(f1_pr, c1_pr); // 31 scen;
			}
			AstarHandler.resetCheck(c0_pr,c1_pr);
		}

	// 		//DEBUG
	// 		console.log("\n=====================");
	// 		console.log("F:", fath.id, debugHaploData(fath_hp));
	// 		console.log("M:", moth.id, debugHaploData(moth_hp));
		//console.log("Ci", pers.id, debugHaploData(pers_hp));

		// Remove Ambigious regions. Must be done here so that next-gen
		// deals only with clean data and not a hodge-podge of possible
		// inheritance patterns.


		/*
		The problem here is that each child allele could inherit from one of four parental
		chromosomes, but needs to do so in an exclusive fashion such that a maternal haploblock
		does not also appear in the childs paternal haploblock
		*** (i.e. no two blocks can have the same color across sister alleles)***

		To counter this, we try a standard run on a given allele and use the unique groups discovered
		on the best resolved path of that allele as an exclusion list for the opposing allele.

		This will prevent haploblocks from mixing.
		*/
		var maternal_exclusion = moth_hp[0].unique_groups.concat(moth_hp[1].unique_groups),
			paternal_exclusion = fath_hp[0].unique_groups.concat(fath_hp[1].unique_groups);



		// Check for consanginuity
		var key = "m:"+fath.id+"-"+moth.id;
		var consang_check = uniqueGraphOps.getFam(fam).edges[key].consangineous;

		if (consang_check){
			// Kick out groups that overlap in both sets
			var toKick = [];
			// console.log(key+" is said to be consangineous...");

			for (var ov1=0; ov1 < maternal_exclusion.length; ov1++)
				for (var ov2=0; ov2 < paternal_exclusion.length; ov2++)
					if (maternal_exclusion[ov1] === paternal_exclusion[ov2])
						toKick.push( maternal_exclusion[ov1]);

			if (toKick.length !== 0){
				for (var tk=0; tk < toKick.length; tk++){
					var val = toKick[tk];

					var maternal_index = maternal_exclusion.indexOf(val),
						paternal_index = paternal_exclusion.indexOf(val);

					maternal_exclusion.splice(maternal_index,1);
					paternal_exclusion.splice(paternal_index,1);
				}
			}
		}

		var res0 = a_star_bestfirst(pers_hp[0].pter_array, maternal_exclusion),
			res1;

		// Didn't take with maternal, try paternal
		if (res0 === null){
			res0 = a_star_bestfirst(pers_hp[0].pter_array, paternal_exclusion);

			if (res0 === null){
				console.log( pers_hp[0], paternal_exclusion, maternal_exclusion,
					consang_check, 
					pers.id, moth.id, fath.id );
				throw new Error( "Skipper's Log: No land in sight.");
			}


			res1 = a_star_bestfirst(pers_hp[1].pter_array, maternal_exclusion);
		}
		res1 = a_star_bestfirst(pers_hp[1].pter_array, paternal_exclusion);

		if (res1 === null){
			//If we're here, then chances are res0 is ambiguous - it has solutions
			//for both exclusion scenarios.

			//We assume that it only tried the first, so we try the second
	 		res0 = a_star_bestfirst(pers_hp[0].pter_array, paternal_exclusion);
	 		res1 = a_star_bestfirst(pers_hp[1].pter_array, maternal_exclusion);

			if (res0 === null || res1 === null)
				throw new Error("Skipper's Log: It's been days...");

		}


		var unique0 = res0.filter(function(item,i,ar){
			return (item !== FounderColor.zero_color_grp  && ar.indexOf(item) === i);
		});
		var unique1 = res1.filter(function(item,i,ar){
			return (item !== FounderColor.zero_color_grp  && ar.indexOf(item) === i);
		});

		pers_hp[0].unique_groups = unique0;
		pers_hp[1].unique_groups = unique1;

		//Overwrite person data
		var curr_index = -1;
		while( ++curr_index < res0.length){
			pers_hp[0].pter_array[curr_index].color_group = [ res0[curr_index] ];
			pers_hp[1].pter_array[curr_index].color_group = [ res1[curr_index] ];
		}

		//console.log("Cf", pers.id, debugHaploData(pers_hp));
	}
}

var SubSelectLevel = {

/* The naive approach would be to use the existing LevelGrid to
   determine DOS between individuals, but we would still need
   to determine whether said individuals are related, meaning
   recursing through parents would still be required and we can
   calculate DOS from that alone.

   The better approach -- (1) For each individual
*/
	function(selection_map){

		// Grab level grids for each family member

		for (var fam in selection_map){

			var fam_grid = GlobalLevelGrid.getGrid(fam);

			for (var g=0; g < selection_map[fam].length; g++) // gen
			{
				for (var i=0; i < selection_map[fam][g].length; i++) // indiv
				{
					var indiv = selection_map[fam][g][i];
					if (indiv.id){}
				}
			}
		}
	}
}




function findDOSinSelection(selection_map){

	console.log(selection_map)

	// Replace this as the main argument, if generations are not needed....
	var selection_map_map = {}; // This is an actual map, no generations
	
	for (var fam in selection_map){
		selection_map_map[fam] = {};
		for (var g=0; g < selection_map[fam].length; g ++){
			for (var i=0; i < selection_map[fam][g].length; i++){
				var indiv_id = selection_map[fam][g][i];
				selection_map_map[fam][indiv_id] = 1;
			}
		}
	}

	var fam_lines = {}; // sib_map for each family, holds total lines to be drawn.

	for (var fam in selection_map){
		var num_diff_gens = selection_map[fam].length -1;

		var sib_map = {}; //stores line data for each sibgroup, regardless of generation

		for (var g=num_diff_gens; g >= 0; g--)
		{
			var current_gen = selection_map[fam][g];

			// 1. Make sib groups
			var sib_groups = {};	// indivs sharing same immediate parents

			for (var i1 = 0; i1 < current_gen.length; i1 ++){
				var id = current_gen[i1],
				perc = familyMapOps.getPerc(id,fam);

				// Only Non-founders can be sibs
				var fm_key;
				if (perc.father !== 0){
					fm_key = perc.father.id+"_"+perc.mother.id;
				}
				else {
					//Founders are in their own sibgroups
					fm_key = perc.id;					
				}
				sib_groups[fm_key] = sib_groups[fm_key] || [];
				sib_groups[fm_key].push(perc);
			}

//			console.log("sib_groups", sib_groups);


			// if (g === 0) continue;
			// Don't need to scan up if no higher order members are selected

			// 2. Recurse up for relations
			for (var sgr in sib_groups){
				var perc = sib_groups[sgr][0]; // only need first in each parental group
				var root = perc;

				// Maps to reduce duplicate lines
				var matelines = {},
				directlines = {};
				// siblines = []; // not needed, there's only one
				
				// Populates matelines and directlines, does not return anything.
				var search = function recurseParents(root, level)
				{
					if (root === 0)
						return -1;

					if (root.id !== perc.id)
					{
						if (root.id in selection_map_map[fam]){
							return {
								id: root.id,
								dos: level
							};
						}
					}

					var moth_rez = recurseParents(root.mother, level + 1),
						fath_rez = recurseParents(root.father, level + 1);

					if (moth_rez !== -1 && fath_rez !== -1)
					{
						var are_mates = false;

						//If the connected at the same level, then check if they're mates.
						if (moth_rez.dos === fath_rez.dos){
							var moth_perc = familyMapOps.getPerc(moth_rez.id, fam);

							for (var m=0; m < moth_perc.mates.length; m++){
								if (fath_rez.id === moth_perc.mates[m].id){
									are_mates = true;
									break;
								}
							}
						}

						if (are_mates) {
							// Push as a single connection
//							console.log("adding mateline for", root.id)
							matelines[fath_rez.id+"_"+moth_rez.id] = moth_rez.dos;
						} else {

							var link_found = false;

							// Are they connected at another level?
							var lower_dos_obj, higher_dos_obj;
							
							if (moth_rez.dos < fath_rez.dos){
								lower_dos_obj = moth_rez;
								higher_dos_obj = fath_rez;
							}
							else {
								lower_dos_obj = fath_rez;
								higher_dos_obj = moth_rez;
							}

							//Check if higher_dos_obj is linked to lower_one
							



							if (!link_found){
								// No link - Push as seperate connectors
								directlines[moth_rez.id] = moth_rez.dos;
								directlines[fath_rez.id] = fath_rez.dos;
							}
						}
					}

					else if (moth_rez !== -1) directlines[moth_rez.id] = moth_rez.dos;
					else if (fath_rez !== -1) directlines[fath_rez.id] = fath_rez.dos;

					// console.groupEnd();
					return -1;
				}

				search( root, 0 );

//				console.log("sib_groups[sgr]", sib_groups[sgr]);

				if (!(g in sib_map)){
					sib_map[g] = {};
				}

				var sib_key = sib_groups[sgr][0].id;

				// Add the others if more than one sibs in group
				if (!(sib_groups[sgr].length === 1))
				{
					for (var i=1; i < sib_groups[sgr].length; i++){
						sib_key += "_"+sib_groups[sgr][i].id;
					}
				}

				// if (!( isEmpty(matelines) && isEmpty(directlines))){
					sib_map[g][sib_key] = {
						matelines: matelines,
						directlines: directlines
					};
				// }
			}

			// Essentially map2OrderedArray, but nested version
			// -- only occurence here
			var sib_map2 = [];
			for (var k in sib_map){
				var empty= true;
				for (var kk in sib_map[k]){
					if (!( isEmpty( sib_map[k][kk] ) )) {
						empty = false;
						break;
					}
				}
				if (!empty)
					sib_map2.push(sib_map[k])
			}

			fam_lines[fam] = sib_map2;
		}
	}
//	console.log("fam_lines", fam_lines)


	// If an indiv exists 




	return fam_lines
}

var DOS = {

	initial_group_node_offset : {
		x:HaploWindow.left_margin_x,
		y:40 // <-- Hardcoded for now, because I don't actually know how
		     //     to derive this value
	},
	haplo_group_nodes : new Kinetic.Group(),
	haplo_group_lines : new Kinetic.Group(),

	min : null,
	max : null,
	group : null,

	render: function (line_points, slot_array, finishfunc = 0){
		//
		// Renders to DOS.group
		//
		var min_pos = {x:9999,y:9999},
			max_pos = {x:0,y:0};

		DOS.group = new Kinetic.Group();

		var tween_nodes = [];

		DOS.group.add(DOS.haplo_group_lines);
		DOS.group.add(DOS.haplo_group_nodes);

		// Add directly to layer for now, but after animation over
		// move to white_box group
		haplo_layer.add( DOS.group );

		// Render Nodes
		var start_x = 20;

		min_pos.x = start_x;

		var render_counter = slot_array.length - 1;

		for (var fd=0; fd < slot_array.length; fd++){

			var fid_id = slot_array[fd][0].split('_'),
				y_pos = slot_array[fd][1];
		
			if (min_pos.y > y_pos) min_pos.y = y_pos;

			var fid = fid_id[0], 
				id = fid_id[1];

			var gfx = uniqueGraphOps.getFam(fid).nodes[id].graphics;

			// Store old position before moving
			gfx.main_layer_pos = gfx.getPosition();
			gfx.main_layer_group = uniqueGraphOps.getFam(fid).group;
			gfx.remove()
			gfx.listening( false );
			
			DOS.haplo_group_nodes.add(gfx);
			gfx.setPosition(
				{x: gfx.main_layer_group.getX() + gfx.main_layer_pos.x,
				 y: gfx.main_layer_group.getY() + gfx.main_layer_pos.y}
			);

			var tween = kineticTween({
				node: gfx,
				x: start_x + DOS.initial_group_node_offset.x,
				y: y_pos + DOS.initial_group_node_offset.y,
				onFinish: function(){
					if (render_counter-- === 0){

						mapLines(line_points, DOS.haplo_group_lines);
						
						if (finishfunc !== 0){
							finishfunc();
						}
					}
				}
			});
			tween_nodes.push(tween);

			// gfx.setPosition( {x:start_x, y:y_pos} );

			start_x += horiz_space;

			if (start_x > max_pos.x) max_pos.x = start_x;
			if (y_pos > max_pos.y) max_pos.y = y_pos;
		}

		// Show that nodes have been popped off
		main_layer.draw();

		for (var t=0; t < tween_nodes.length;){
			tween_nodes[t++].play();
		}

		DOS.min = min_pos;
		DOS.max = max_pos;
	}
}



// Line map is given by DOS
function mapLinesAndNodes(line_map )
{
	var slot_array = []; // index --> gfx
	
	function sortXHaplo(pos_y, id, fid ){
		var key  = fid+'_'+id;

		for (var k=0; k < slot_array.length; k ++){
			if (key === slot_array[k][0]){
				slot_array.splice(k,1);
				break;
			}
		}
		slot_array.push( [key,pos_y] );
	}

	// The line map is a generation array, so has a very top-bottom
	// approach in line placement
	var line_points = {};
	var end_point_nodes_drawn = {}; // Nodes with lines already attached (no multiple lines)

	
	function addLinePoint( fid, key, obj )
	{
		if (key in line_points[fid]){
			var eski_obj = line_points[fid][key],
				eski_dos = eski_obj.dos

			if (obj.dos < eski_dos){
				line_points[fid][key] = obj; // Use new object if has a lower DOS
			}
		}
		else {
			line_points[fid][key] = obj;
		}
	}

	for (var fid in line_map){
		var start_y = 0;
		var drop_amount = 50;

		line_points[fid] = {};

		var back_step = 10;

		for (var g=0; g < line_map[fid].length; g++){

//			console.log("gen=", g, line_map[fid][g])


			// ConnectEEs and connectERs...  FUCK THIS
			for (var sgroup in line_map[fid][g])
			{
//				console.log("SIB GROUP", sgroup)
				// start_y += drop_amount;

				var directline = line_map[fid][g][sgroup].directlines,
					mateline = line_map[fid][g][sgroup].matelines;

				for (var mline in mateline)
				{
					var parents = mline.split('_'),
						fath_id = parents[0],
						moth_id = parents[1];

					//Place moth + fath
					sortXHaplo( start_y , fath_id, fid );
					sortXHaplo( start_y, moth_id, fid );

					// Add mate line
					var consang = uniqueGraphOps.getFam(fid).edges['m:'+fath_id+'-'+moth_id].consangineous;

					addLinePoint(
						fid, fath_id,
						{to:moth_id, consang:consang, drop:null, text:null, lastgen:(g==line_map[fid].length-1)}
					);
					
					// Sib line from mateline
					var dos = mateline[mline];

					addLinePoint(
						fid, fath_id+'_'+moth_id,
						{to: sgroup, consang: false, drop:drop_amount, 
						text: dos, lastgen:(g==line_map[fid].length-1)}
					);
				}

				// Directline
				for (var dline in directline)
				{
					// Check if dline key is not already part of a mating, (just use that)
					// Easier to check here than upstream
					var found_existing_mateline = false;
					var linep_keys = Object.keys(line_points[fid])

					for (var kk=0; kk < linep_keys.length; kk ++){
						var key_ids = linep_keys[kk].split('_');

						if (key_ids.length != 2) key_ids = [key_ids]

						for (var ik=0; ik < key_ids.length; ik ++){
							if (dline === key_ids[ik]){
								found_existing_mateline = true;
								break;
							}
						}
						if (found_existing_mateline) break;

						// Doesn't work for 76521 - 76611 - 5 - 7 - 8 for fam 1004
						// but only because 76611 is not related to 5 at all (step mother?)
					}

					if (!(found_existing_mateline)){
						start_y += drop_amount;

						sortXHaplo( start_y, dline, fid );

						var dos = directline[dline]

						addLinePoint(
							fid, dline, 
							{to:sgroup, consang:false, drop:drop_amount, 
							 text:dos, lastgen:(g==line_map[fid].length-1)}
						);
					}
				}
				
				//Iterate over all sibs and hang from anchor
				var sib_ids = sgroup.split('_');
				var sib_stepper = (start_y + drop_amount); // + (back_step*(sib_ids.length -1));

				for (var s=0; s < sib_ids.length; s++)
				{
					sortXHaplo(sib_stepper, sib_ids[s], fid );
					// addLinePoint( fid, sib_ids[s], {to:sib_ids[s-1]})
				}
			} // end sib group
		} // end gen
	} // end fam

//	console.log("line_map", line_points, "slot_array", slot_array)
	return {lp: line_points, sa: slot_array};
}





function mapLines(line_points, haplo_group_lines){
	// Map Lines to their nodes
	for (var fid in line_points){
		for (var from in line_points[fid]){
			var start_ids = from.split('_')

			var info = line_points[fid][from];

			var sib_anchor_pos = null;

			// Mateline or DOSline
			if (start_ids.length === 1){

				var from_gfx_pos = uniqueGraphOps.getFam(fid).nodes[from].graphics.getPosition();

				if (info.drop === null){ 	// Mateline

					var to_id = info.to,
						to_gfx_pos = uniqueGraphOps.getFam(fid).nodes[to_id].graphics.getPosition();

					haplo_group_lines.add( Graphics.Lines.addRLine_simple(from_gfx_pos, to_gfx_pos, info.consang ) );
				}
			 	else {  
			 		// DOS line -- direct
			 		sib_anchor_pos = {x: from_gfx_pos.x, y:from_gfx_pos.y + info.drop/3};
			 		haplo_group_lines.add( Graphics.Lines.addRLine_simple(from_gfx_pos, sib_anchor_pos, false) );
			 	}
			}
			else { // DOS line -- mate
				var parent1_id = start_ids[0],
					parent2_id = start_ids[1];

				var parent1_gfx = uniqueGraphOps.getFam(fid).nodes[parent1_id].graphics.getPosition(),
					parent2_gfx = uniqueGraphOps.getFam(fid).nodes[parent2_id].graphics.getPosition();

				var mid_point_pos = {x: (parent1_gfx.x + parent2_gfx.x)/2, y: parent1_gfx.y};
				sib_anchor_pos = {x:mid_point_pos.x, y:mid_point_pos.y + info.drop/3};

				haplo_group_lines.add( Graphics.Lines.addRLine_simple(mid_point_pos, sib_anchor_pos, false ));
			}


			if (sib_anchor_pos !== null){
		 		var sib_ids = info.to.split('_');

		 		var min_x_of_sibgroup = 99999999999,
		 			y_pos_of_any_sibline = 999999999;

		 		for (var s=0; s < sib_ids.length; s++){
		 			var sib_id = sib_ids[s],
		 				sib_gfx_pos = uniqueGraphOps.getFam(fid).nodes[sib_id].graphics.getPosition();

		 			var sibline = null;
		 			if (!info.lastgen)
		 				sibline = Graphics.Lines.addRLine_nonoverlapY(sib_anchor_pos, sib_gfx_pos, false);
		 			else
		 				sibline = Graphics.Lines.addRLine_simple(sib_anchor_pos, sib_gfx_pos, false);

		 			haplo_group_lines.add( sibline );

		 			if(sib_gfx_pos.x < min_x_of_sibgroup){
		 				min_x_of_sibgroup = sib_gfx_pos.x;
		 				y_pos_of_any_sibline = sibline.getPoints()[3] + sibline.getY();
		 			}
		 		}

 		//Add dos info
		 		if (info.text > 1){
		 			haplo_group_lines.add(
			 			createDOSCircle(
							(sib_anchor_pos.x + min_x_of_sibgroup) / 2,
							y_pos_of_any_sibline,
							info.text
						)
					);
			 	}
			}
		}
	}

	main_layer.draw();
	haplo_layer.draw();
}



var createDOSCircle = function(xx,yy, dos_text){

	var group = new Kinetic.Group({
		x: xx,
		y: yy
	});

	var circle = new Kinetic.Circle({
		x: 0,
		y: 0,
		radius: 6,
		fill: 'white', stroke: 'black', strokeWidth: 1
	});

	var text = new Kinetic.Text({
		x: - 3,
		y: - 5,
		text: dos_text,
		fontSize: 11, fill: 'black'
	});

	group.add(circle);
	group.add(text);

	return group;
}




var HomologySelectionMode = {

	_exit : null,
	_active : false,

	init: function()
	{
		HomologySelectionMode._active = true;

		ButtonModes.setToHomologySelection();

		HomologySelectionMode.sub_select_group = null;   //destroyed by homology_buttons exit function
		HomologySelectionMode.__makeBackground();
		HomologySelectionMode.__addBounders();

		haplo_layer.add(HomologySelectionMode.sub_select_group);
		haplo_layer.draw();
	},

	// Also used by HomologyMode
	cleanup: function(){
		HomologySelectionMode.sub_select_group.rect.destroy();

		// Detach top back to normal haplowindow
		HaploWindow._top.moveTo( HaploWindow._group )

		HomologySelectionMode.sub_select_group.destroyChildren();
		HomologySelectionMode.sub_select_group.destroy();	
	},


	// HomologySelection --> HaploMode/Comparison	
	quit: function(){
		HomologySelectionMode._active = false;
		HomologySelectionMode.cleanup();

		ButtonModes.setToComparisonMode();

		HaploWindow._exit.show();
		haplo_layer.draw();		
	},


	// Called by sidetool.js
	// HomologySelection --> HomologyMode
	submit: function()
	{
		ButtonModes.setToHomologyMode();

		HomologyMode.selected_for_homology = [];
	
		for (var s in SelectionMode._items){
			if (SelectionMode._items[s].selected)
			{
				SelectionMode._items[s].box.stroke('green')
				SelectionMode._items[s].box.off("mouseover mouseout mouseup");
				HomologyMode.selected_for_homology.push(s);
			}
			SelectionMode._items[s].box.off('click');
		}

		// Do not perform cleanup until mode fully exits
		//     --> HomologySelection --> (submit) --> HomologyMode --> (exit)
//		HomologySelectionMode.__cleanup();
		HomologySelectionMode._exit.hide();

		haplo_layer.draw();

		if (HomologyMode.selected_for_homology.length === 0){
			utility.notify("Info", "Please select individuals for analysis");
			return -1;
		}


		HomologyPlot.plots = scan_alleles_for_homology( HomologyMode.selected_for_homology );

		HomologyMode.init();
		HomologyMode.redraw();

		return 0;
	},


	__makeBackground: function()
	{
		// Main selection layer
		HomologySelectionMode.sub_select_group = new Kinetic.Group({
			x:0, y:0,
			width: stage.getWidth(),
			height: stage.getHeight()
		});

		HomologySelectionMode.sub_select_group.rect = new Kinetic.Rect({
			x:0, y:0,
			width: stage.getWidth(),
			height: stage.getHeight(),
			fill: 'black',
			strokeWidth: 0,
			opacity: 0.2
		});

		HomologySelectionMode.sub_select_group.add(
			HomologySelectionMode.sub_select_group.rect
		);

		// Destroyed on quit();
		HomologySelectionMode._exit = addExitButton(
			{x: 20,
			 y: 20},
			 HomologySelectionMode.quit,
			 1
		);
		HomologySelectionMode.sub_select_group.add( HomologySelectionMode._exit );


		// Shift top panel to front layer
		HaploWindow._top.moveTo( HomologySelectionMode.sub_select_group )
		HaploWindow._exit.hide();
	},


	__addBounders: function()
	{
		//Clear previous SelectionMode._items
		SelectionMode._items = {};

		for (var c=0; c < DOS.haplo_group_nodes.children.length; c++)
		{
			var node = DOS.haplo_group_nodes.children[c];

			if (node == 0) continue;

			var key = node.attrs.id,
				gfx = node,
				pos = gfx.getAbsolutePosition(),
				bounder = SelectionGraphics.addBounder(pos, key, false, null); // false -> haplo_layer, null --> testHaplos

			// By default not enabled
			SelectionMode._items[key] = {
				box:bounder,
				selected:false,
				graphics: gfx
			};
			HomologySelectionMode.sub_select_group.add(bounder);
		}
	},
}



var HomologyButtons = {

	_alreadyset : false,

	_group : document.getElementById('homology_buttons'),
	_type_accessor : document.getElementById('plot_type'),
	_minext_accessor : document.getElementById('zygous_min_stretch'),
	_minscore_accessor : document.getElementById('zygous_min_score'),

	_export_accessor : document.getElementById('homology_export'),
	_redraw_accessor : document.getElementById('homology_redraw'),
	//_exit_accessor : document.getElementById('hom_exit'),

	init: function(){

		HomologyButtons._show();

		if (HomologyButtons._alreadyset){
			return 0;
		}

		// Make onclick events
		//
		// For now, hide the redrawer, it's already locked to onchange for other accessors
		HomologyButtons._redraw_accessor.style.display = "none";
		//HomologyButtons._redraw_accessor.onclick = HomologyMode.redraw;



		HomologyButtons._export_accessor.onclick = function(){

			utility.yesnoprompt("Homology Export", "Export All or Shown?",
				"All", HomologyButtons._printAll,
		 		"Shown", HomologyButtons._printCurrent
			);
		};
		HomologyButtons.setonchange();
		HomologyButtons._alreadyset = true;
	},

	setonchange: function()
	{
		for (var item in HomologyButtons)
		{
			if (item.indexOf("_accessor")!==-1){
				HomologyButtons[item].onchange = HomologyButtons.updateAll;
			}
		}
	},

	updateAll: function(){
		HomologyButtons.updateHomologyInputs();
		HomologyMode.redraw();
	},

	updateHomologyInputs: function(){
		HomologyMode.type = HomologyButtons._type_accessor.value;

		HomologyMode.minexten = Number( HomologyButtons._minext_accessor.value );
		HomologyMode.minscore = Number( HomologyButtons._minscore_accessor.value );
	},


	_printAll: function(){
		HomologyPlot.printToFile(HomologyMode.selected_for_homology);
	},

	_printCurrent: function(){
		HomologyPlot.printToFile(HomologyMode.selected_for_homology,
			HaploBlock.sta_index, 
			HaploBlock.end_index
		);
	},

	_show: function(){
		HomologyMode._active = true;
		HomologyButtons._group.style.display = "block";
	}
}


var HomologyMode = {

	selected_for_homology: null,

	_exit : null, //set by init and destroyed by quit
	_active : false,

	minexten : 0,
	minscore : 0,
	type : null,


	init(){
		ButtonModes.setToHomologyMode();

		HomologyMode._active = true;
		HaploWindow._exit.hide();

		HomologyMode._exit = addExitButton(
			{x: 20,
			 y: 20},
			 HomologyMode.quit,
			 0
		);
		HomologySelectionMode.sub_select_group.add( HomologyMode._exit );

		HomologyButtons.init();
	},

	quit: function()
	{
		HomologyMode._active = false;

		HomologyMode._exit.destroy();

		HomologySelectionMode.cleanup();

		HomologyButtons._group.style.display = "none";

		HomologyPlot.removeScores();

		//HomologySelectionMode.init();
		// Just quit to comparison view instead
		HomologySelectionMode.quit();


		MarkerSlider.makeVisible(true)

		haplo_layer.draw();
	},

	redraw: function(){
		HomologyButtons.updateHomologyInputs();

		HomologyPlot.plotScoresOnMarkerScale
		(
			HomologyPlot.plots[HomologyMode.type],
			HomologyMode.minexten,
			HomologyMode.minscore
		);
	},
}

var HomologyPlot = {

	plots: null, // valid: HOM, HET, CHET, family_specific.{HOM,HET,CHET}
	rendered_filtered_plot: null,
	rendered_filtered_plot_max: 0,

	_type : "HOM",

	debugUpdatePlots: function(spec_plot, stretch, score){
		HomologyPlot.plotScoresOnMarkerScale( spec_plot, stretch, score )
	},

	printToFile: function( ht_ids, 
		start_index = 0, 
		stop_index = (MarkerData.rs_array.length - 1))
	{
		var padding_marker = "            ", 
			padding_score  = "     ",
			padding_names  = "       ",
			padding_leftmost= padding_names.slice(-(padding_names.length-1)); // must be one less than padding_names

		// TOP LINE
		// Family names
		var families_encountered = {};

		for (var i = 0; i < ht_ids.length; i++)
		{
			var f_id = ht_ids[i],
				fid  = f_id.split('_')[0]

			if (!(fid in families_encountered)){
				families_encountered[fid] = []
			}
			families_encountered[fid].push( f_id );
		}

		var text = padding_marker;
		
		// Print names, get their ordering
		var ordering = {};
		var order_index = [];

		for (var fid in families_encountered)
		{
			num_indivs = families_encountered[fid].length;
			var padding_fam = "";
			for (var n=0; n < num_indivs; n++)
			{
				var f_id  = families_encountered[fid][n],
					index = ht_ids.indexOf(f_id);

				ordering[index] = f_id;
				order_index.push (index )
				
				padding_fam += padding_names;
			}

			text += fid.toString().center('|' + padding_fam.slice(0, padding_fam.length - 1)); //'|' + padding_fam.slice(0, padding_fam.length - 1));
		}
		// second pass for family totals
		for (var fid in families_encountered)
		{
			var name = "Scores "+ fid;

			var padding_total = padding_score + padding_score + padding_score;
			text += name.center('|' + padding_total.slice(0,padding_total.length -1));
		}

		var padding_total = padding_score + padding_score + padding_score
		text += "Global totals".center( '|' + padding_total.slice(0, padding_total.length -1) );
		text += "|\n"

		// SECOND LINE
		// Individuals names, family totals, global totals
		text += padding_marker;
		var tmp_fam = -1
		for (var o = 0; o < order_index.length; o++)
		{
			var index = order_index[o],
				fid = ordering[index];

			var f_id = fid.split('_'),
				fid = f_id[0],
				id = f_id[1];

			var aff = (familyMapOps.getPerc(id,fid).affected == PED.AFFECTED)?'a':'u';

			if (tmp_fam != fid){
				tmp_fam = fid;
				text += (id.toString()+'_'+aff).center('|' + padding_names.slice(0,padding_names.length -1) );
			} else {
				text += (id.toString()+'_'+aff).center(padding_names);
			}
		}

		for (var fid in families_encountered)
		{
			text += '|' + "Hom".paddingLeft(padding_score.slice(0, padding_score.length -1));
			text += "Het".paddingLeft(padding_score);
			text += "Chet".paddingLeft(padding_score);
		}

		text += '|' + "Hom".paddingLeft(padding_score.slice(0, padding_score.length -1));
		text += "Het".paddingLeft(padding_score);
		text += "Chet".paddingLeft(padding_score) + '|'
		text += '\n'


		// DATA LINES
		// Marker, GTs, fam scores, total score

		var fam_hom_v = HomologyPlot.plots.family_specific.HOM,
			fam_het_v = HomologyPlot.plots.family_specific.HET,
			fam_chet_v=HomologyPlot.plots.family_specific.CHET;

		var hom_v  = HomologyPlot.plots.HOM,
			het_v  = HomologyPlot.plots.HET,
			chet_v = HomologyPlot.plots.CHET;

		for (var l=start_index; l <= stop_index; l++)
		{
			var marker = MarkerData.rs_array[l];
			text += marker.paddingLeft(padding_marker);

			for (var i=0; i < order_index.length; i++)
			{
				var f_id = ht_ids[order_index[i]].split('_'),
					fid = f_id[0],
					id = f_id[1];

				var alleles = familyMapOps.getPerc(id,fid).haplo_data,
					a1 = alleles[0].data_array[l],
					a2 = alleles[1].data_array[l];

				text += (a1.toString() + "" + a2.toString()).center(padding_names)
			}

			//console.log(HomologyPlot.plots.family_specific);

			for (var fid in families_encountered)
			{
				text += fam_hom_v[fid][l].toString().center(padding_score);
				text += fam_het_v[fid][l].toString().center(padding_score);
				text += fam_chet_v[fid][l].toString().center(padding_score);
			}

			text += hom_v[l].toString().center(padding_score);
			text += het_v[l].toString().center(padding_score);
			text += chet_v[l].toString().center(padding_score);

			//var score_columns = '\t ' + hom_v.toString() + '\t ' + het_v.toString() + '\t ' + chet_v.toString();
			//score_columns = score_columns.replace(/ -/g, "-");

			text += '\n';
		}
		// Write
		exportToTab(text);
	},

	removeScores: function(redrawtoo = true)
	{
		if ((MarkerSlider._instance !== null)
		 && (MarkerSlider._instance.plotline !== undefined))
		{
			MarkerSlider._instance.plotline.destroy();
			//haplo_layer.draw();
			//debugger		
		}
		HomologyPlot.rendered_filtered_plot = null;
		
		if (redrawtoo){
			HaploBlock.redrawHaplos();
			//haplo_layer.draw();
		}
	},

	plotScoresOnMarkerScale: function(specific_plot, stretch, score)
	{
		/* Grab rangeline and hang graphics from it.

		 Shape likely to be > 1000 px tall, and rangeline only 300 px,
		 which is a scale down of 3x that most pc's can handle
		 ~~~ hopefully Kinetic/canvas mipmaps efficiently
		     so I don't have to ~~~
		*/

		MarkerSlider.makeVisible(true);

		var marker_scale = MarkerSlider._instance,
			rangeline = marker_scale.rangeline,
			r_points = rangeline.getPoints(),
			r_height = r_points[3] - r_points[1],
			plen = specific_plot.length;

		HomologyPlot.removeScores(false);

		var point_and_max = HomologyPlot.plotAxis4( specific_plot, stretch, score);

		var inform_points = point_and_max.plot,
			points_max    = point_and_max.max;
		
		// Insert [0,0] at the start
		inform_points.splice(0,0,0)
		inform_points.splice(0,0,0)

		HomologyPlot.rendered_filtered_plot = inform_points;
		HomologyPlot.rendered_filtered_plot_max = points_max;
		
		var infline = new Kinetic.Line({
			x: rangeline.getX(),
			y: rangeline.getY(),
			points: inform_points,
			stroke: 'blue',		strokeWidth: 0.3,
			closed: true,	fill: 'blue',	alpha: 0.3
		});

		infline.scaleY( r_height/plen );
		infline.scaleX( 50 / points_max );

		marker_scale.plotline = infline;

		marker_scale.add( marker_scale.plotline );
		marker_scale.plotline.setZIndex(-99);

		HaploBlock.redrawHaplos();
	},


	/* path finding over the entire plot, instead of slwindow*/
	plotAxis4: function( given_plot, stretch_min, score_min)
	{
		// Notes: Plot is just score, this is NOT xy data
		//
		// 1. Apply score filter
		var score_filter_plot = given_plot.map(x => (x >= score_min)?x:0),
			tmp_plot = score_filter_plot;

		//console.log(given_plot)
		//console.log(tmp_plot)

		//
		//
		// 2. Crawl over plot to find stretches
		var current_stretch = 0;

		var plen = tmp_plot.length,
			p=0;		// lookahead_base

		var new_plot = [];

		while (p++ < plen)
		{
			if (tmp_plot[p] === 0){

				// End an ongoing search
				if (current_stretch >= stretch_min){

					// qualifies, copy over results
					for (var q=p-(current_stretch+1); q++ < p;){
						new_plot[q] = tmp_plot[q]
					}
				}
				// Regardless, reset counter
				current_stretch = 0;
			}
			else {
				// Copy over NOTHING HERE -- happens retrospectively
				current_stretch ++;
			}
		}

		// Check if still qualifies at end
		if (current_stretch >= stretch_min){
			for (var q=p-(current_stretch+1); q++ < p;){
				new_plot[q] = tmp_plot[q]
			}
		}

		// Fill in blanks, and convert to XY plot
		var return_xy = [],
			max_score = -1;

		for (var p=0; p++ < plen;)
		{
			new_plot[p] = new_plot[p] || 0;
			
			if (new_plot[p] < 0) {			new_plot[p] = 0;   }	
			else if (new_plot[p] > max_score){	max_score = new_plot[p];	}

			return_xy.push( new_plot[p], p );
		}
		return {plot:return_xy, max: max_score};
	},


	// Over(under?)lays the haploblocks rendered if the
	// homology mode is active/present.
	addHomologyPlotOverlay()
	{
		// Note: Due to [x,y,x,y] specs, this is DOUBLE the marker length
		var current_specific_plot = HomologyPlot.rendered_filtered_plot;
		var npoints = [0,0];

		var count = 1;

		var white_rect_right = HaploWindow._bottom.rect.getWidth() + HaploWindow._bottom.rect.getAbsolutePosition().x;
		var scale = white_rect_right / HomologyPlot.rendered_filtered_plot_max;

		for (var i=HaploBlock.sta_index; i <= HaploBlock.end_index; i++){

			var x_coord = current_specific_plot[i*2],
				y_coord = current_specific_plot[(i*2)+1];

			var score_coord = (x_coord < 0)?0:x_coord*scale;

			var y_initial = (count) * HAP_VERT_SPA,
				y_next = (count +1) * HAP_VERT_SPA;

			npoints.push( score_coord, y_initial)
			npoints.push( score_coord, y_next)

			// It may seem like regions overlap over subsequent iterations,
			// but bear in mind that they do so at different score positions.
			count ++;
		}
		npoints.push( 0, (count) * HAP_VERT_SPA)



		return line = new Kinetic.Line({
			x: -haploblock_spacers.marker_offset_px - 20,
			y: 0,
			stroke: 'red',
			strokeWidth: 1,
			closed: true,
			fill: 'red',
			opacity: 0.3,
			points: npoints
		});
	}

}

/* Needs to be rerun for each selection */

function scan_alleles_for_homology( ids_to_scan, same_family_hblock = true ){

	var alleles = [];

	// Sort alleles into groups of affecteds and unaffecteds
	//   Affecteds are checked for homology, and subtracted against unaffecteds

	var num_markers = MarkerData.getLength();


	// Family maps
	var hom_region_scores = {},
		het_region_scores = {},
		chet_region_scores= {};

	for (var i=0; i < ids_to_scan.length; i++)
	{
		var fid_id = ids_to_scan[i].split('_'),
			fid = fid_id[0], 
			id = fid_id[1];

		var perc_affected = (familyMapOps.getPerc(id,fid).affected === PED.AFFECTED),
			perc_haplo_data = familyMapOps.getPerc(id,fid).haplo_data;

		var data_only = [
			perc_haplo_data[0].data_array,
			perc_haplo_data[1].data_array
		];

		var group_only = [
			perc_haplo_data[0].haplogroup_array,
			perc_haplo_data[1].haplogroup_array
		];

		// initialize family-specific score array
		hom_region_scores[fid]  = new Int8Array(num_markers).fill(0);
		het_region_scores[fid]  = new Int8Array(num_markers).fill(0);
		chet_region_scores[fid] = new Int8Array(num_markers).fill(0);

		alleles.push( {data:data_only, aff:perc_affected, fam:fid, colors:group_only} );
	}

	// Begin processing
	for (var m=0; m < num_markers; m++)
	{
		var hom_allele_global = -1,					// 11 11
			het_allele_global_h1 = -1,
			het_allele_global_h2 = -1;				// 12 12 


		for (var afs = 0; afs < alleles.length; afs++) 		// Iterate over group
		{
			var fd = alleles[afs].fam;

			var hom_at_marker_score = 0,
				het_at_marker_score = 0, 
				chet_at_marker_score= 0;

			var affected_indiv = alleles[afs].aff,
				mult = affected_indiv?1:-1;

			// Fuckit just assume two alleles per patient -- use strings for compatibility
			var ht1 = '' + alleles[afs].data[0][m] + '',
				ht2 = '' + alleles[afs].data[1][m] + '';

			//// If colors are relevant, then uncomment the two lines below -- at the moment
			//// I'm under the impression that A->1 and B->2, and that is carried across all
			//// families -- i.e this is NOT descent data, but phased GENOTYPES.
			//ht1 = ht1 + "-" + alleles[afs].colors[0][m];
			//ht2 = ht2 + "-" + alleles[afs].colors[1][m];

			var perc_is_hom_at_marker = (ht1 === ht2);

			if (perc_is_hom_at_marker)
			{
				if (hom_allele_global === -1){
					// Store only the first individual with a non-zero ht
					// Zero HTs contribute nothing
					if (ht1[0] !== "0" ){
						hom_allele_global = ht1;
						hom_at_marker_score += (2*mult);
					}
				}
				else if (hom_allele_global === ht1){
					hom_at_marker_score += (2*mult);
				}

				// Unaffecteds may be homozygous but may still contribute
				// towards het scores
				/////if (affected_indiv) continue;
			}

			// Chet + Het
			if (het_allele_global_h1 === -1){
				if (ht1[0] !== "0" || ht2[0] !== "0" ){
					het_allele_global_h1 = ht1;
					het_allele_global_h2 = ht2;
					het_at_marker_score += (2*mult)
				
					chet_at_marker_score += (2*mult)
				}
			}

			else {
				if (het_allele_global_h1 === ht1){
					het_at_marker_score += mult

					if (het_allele_global_h2 === ht2){
						het_at_marker_score += mult
						chet_at_marker_score += (2*mult)
					}
				}
				else if (het_allele_global_h1 === ht2){
					het_at_marker_score += mult

					if (het_allele_global_h2 === ht1){
						het_at_marker_score += mult
						chet_at_marker_score += (2*mult)
					}
				}
			}

			hom_region_scores[fd][m]  += hom_at_marker_score;
			het_region_scores[fd][m]  += het_at_marker_score;
			chet_region_scores[fd][m] += chet_at_marker_score;
		}
	}

	// Tally up totals across families
	var hom_totals = new Int8Array(num_markers).fill(0),
		het_totals = new Int8Array(num_markers).fill(0),
		chet_totals= new Int8Array(num_markers).fill(0);

	var fam_keys = Object.keys(hom_region_scores);

	for (var m=0; m < num_markers; m++)
	{
		for (var f=0; f < fam_keys.length; f++)
		{
			var fam = fam_keys[f];

			 hom_totals[m] +=  hom_region_scores[fam][m];
			 het_totals[m] +=  het_region_scores[fam][m];
			chet_totals[m] += chet_region_scores[fam][m];
		}
	}

	return {
		HOM: hom_totals,
		HET: het_totals,
		CHET: chet_totals,
		num_comparisons: ids_to_scan.length,
		family_specific: {
			HOM : hom_region_scores,
			HET : het_region_scores,
			CHET: chet_region_scores
		}
	};
}




var bb;

var run_map = {}

var Test = {

    Benchmark : {
    	run() {
    		var inbr_array = [0.1],
    			root_fndrs = [1,4],
    			max_gendrs = [4,5,6,7],
    			alle_sizes = [6000,7000,8000,9000];

    		var bmarkkey = "benchmark_runs";


    		if (localStorage.getItem(bmarkkey)=== null){
    			localStorage.setItem(bmarkkey, JSON.stringify(run_map))
    		}

    		run_map = JSON.parse( localStorage.getItem(bmarkkey) );

    		for (var ia = 0; ia < inbr_array.length; ia++){
				for (var rf = 0; rf < root_fndrs.length; rf++){
					for (var mg = 0; mg < max_gendrs.length; mg++){
						for (var az = 0; az < alle_sizes.length; az++){

							var inbreed      = inbr_array[ia],
								root_founder = root_fndrs[rf],
								maxgen       = max_gendrs[mg],
								allele_size  = alle_sizes[az];

							var key = "benchmark= " + inbreed + " " + root_founder + " " + maxgen + " " + allele_size;


							if (!(key in run_map)){
								run_map[key] = { 
									passes:  0, 
									attempts :  0, 
									record: []
								};
							}

							var val = run_map[key];

							var passes = val.passes,
								attempts  = val.attempts;

							console.log("attempting=",key, "[attempts,passes]=[", attempts, passes, "]");
							run_map[key].attempts += 1

							if (passes > 40){continue;}
							// Some tests just dont render... skip
							if (attempts  > 40){continue;}


							try {
								BenchMark.launch_with_props(root_founder, maxgen, allele_size, inbreed, false,

									function endFunc(timetree, numpeople, numinbredcouples, timerender){
							        	run_map[key].passes += 1
										run_map[key].record.push({
											time_tree: timetree,
											people: numpeople,
											inbredcouples: numinbredcouples,
											time_render: timerender
										});
	                					console.log(key, "Rendered");

	                					localStorage.setItem(bmarkkey, JSON.stringify(run_map))
	                					setTimeout(function(){
	                						location.reload(true);
	                					},1000);

									},

	        						function terminate(errors){
	        							console.log(key)
	        							run_map[key].record.push({
	        								error: errors
	        							});
	                					console.log(key, "Terminated");

	                					localStorage.setItem(bmarkkey, JSON.stringify(run_map))
	                					setTimeout(function(){
	                						location.reload(true);
	                					},1000);
	                				}
	        					);
							} catch (errors){
								// Log attempts
								run_map[key].record.push({error:errors});
        						localStorage.setItem(bmarkkey, JSON.stringify(run_map));
							}

							return 0; // run one test before a refresh
						}
					}
				}
    		}
    	},

    	start() {
			var key = "benchmark_runner";
    		
    		if (localStorage.getItem(key) === null){
    			Test.Benchmark.disable();
    		}

    		if (localStorage.getItem(key)){
    			Test.Benchmark.run();
    		}
    	},

    	enable() {
    		var key = "benchmark_runner";
    		localStorage.setItem(key, true)
    	},

    	disable() {
    		var key = "benchmark_runner";
    		localStorage.setItem(key, false)
    	}
    },
        
    

    Tutorial : {
	Main(){

	    var pages = [
		["Title1", "This is the text at the top that explains quickly", 
		 "This is the bottom text that rambles on and on about nothing in particular and most people think is a bit much to be honest", null],

		["Title2", "This is the text at the top that explains quickly", 
		 "This is the bottom text that rambles on and on about nothing in particular and most people think is a bit much to be honest", null, 
		 {enter:function(){console.log("page2 enter action")}, exit:function(){console.log("page2 exit action")}}],

		["Title3", "This is the text at the top that explains quickly", 
		 "This is the bottom text that rambles on and on about nothing in particular and most people think is a bit much to be honest", null],
	    ];

	    var pf = new Tutorial( pages, function exit(){
		console.log("Quit function")
	    } );
	},

	Buttons(){
	    userOpts.fancyGraphics = false;
	    MainButtonActions.loadHaploFromStorage();

	    setTimeout(function(){
		var tutbutt = document.getElementById('selection_tools').childNodes[3].childNodes[1].childNodes[0].cells[0].childNodes[0]
		bb =  new ButtonTutorial(tutbutt, "Go away", "Test this tdiasd andso", "right");				
	    },1000)
	}
    },


    GHM : {
	saveChrAndFlow(){
	    localStorage.setItem("GHMPED", debugGH.ped);
	    localStorage.setItem("GHMHAP", debugGH.haplo);
	    localStorage.setItem("GHMMAP", debugGH.map);
	},

	run(){
	    MainButtonActions.preamble();

	    setTimeout(function(){
		MainPageHandler.haplomodeload();

		setTimeout(function(){
		    userOpts.fancyGraphics = false;

		    var haplo_text = localStorage.getItem("GHMHAP");
		    var ped_text = localStorage.getItem("GHMPED");
		    var map_text   = localStorage.getItem("GHMMAP");

		    Genehunter.populateFamilyAndHaploMap(haplo_text);
		    Genehunter.populateMarkerMap(map_text);
		    
		    HaploPedProps.init();
		    FileFormat.__endFuncs( AssignHGroups.resolvers.FLOW );

		    setTimeout(function(){
			SelectionMode.init();
			SelectionAction.selectAffecteds();
			HaploWindow.init();
		    },500)
		}, 500);
	    }, 500);
	}
    },

    Allegro : {
	saveChrAndFlow(){
	    localStorage.setItem("ALLFLOW", debugAllegro.descent);
	    localStorage.setItem("ALLCHR", debugAllegro.haplo);
	    localStorage.setItem("ALLMAP", debugAllegro.map);
	},

	run(){
	    MainButtonActions.preamble();

	    setTimeout(function(){
		MainPageHandler.haplomodeload();

		setTimeout(function(){
		    userOpts.fancyGraphics = false;

		    var haplo_text = localStorage.getItem("ALLCHR");
		    var found_text = localStorage.getItem("ALLFLOW");
		    var map_text   = localStorage.getItem("ALLMAP");

		    Allegro.__populateFamilyAndHaploMap(haplo_text);
		    Allegro.__populateFlow(found_text);
		    Allegro.__populateGeneticPositions(map_text);

		    HaploPedProps.init();
		    FileFormat.__endFuncs( AssignHGroups.resolvers.FLOW );

		    setTimeout(function(){
			SelectionMode.init();
			SelectionAction.selectAffecteds();
			HaploWindow.init();
		    },500)
		}, 500);
	    }, 500);
	}
    },


    Merlin : {
	saveChrAndFlow(){
	    localStorage.setItem("MERLINFLOW", debugMerlin.descent);
	    localStorage.setItem("MERLINCHR", debugMerlin.haplo);
	    localStorage.setItem("MERLINPED", debugMerlin.ped);
	    localStorage.setItem("MERLINMAP", debugMerlin.map);
	},

	run(){
	    MainButtonActions.preamble();

	    setTimeout(function(){
		MainPageHandler.haplomodeload();

		setTimeout(function(){
		    userOpts.fancyGraphics = false;

		    var haplo_text = localStorage.getItem("MERLINCHR");
		    var chr_text   = localStorage.getItem("MERLINFLOW");
		    var map_text   = localStorage.getItem("MERLINMAP");
		    var ped_text   = localStorage.getItem("MERLINPED");

		    Merlin.populateFamilyAndHaploMap(haplo_text);
		    Merlin.populateMarkerMap(map_text)
		    Merlin.populateFlow(chr_text);
		    FileFormat.updateFamily(ped_text);

		    HaploPedProps.init(familyMapOps.inferGenders);
		    FileFormat.__endFuncs( AssignHGroups.resolvers.FLOW );

		    /*			setTimeout(function(){
					SelectionMode.init();
					SelectionAction.selectAffecteds();
					HaploWindow.init();
					},500)*/
		}, 500);
	    }, 500);
	}
    },

    Simwalk : {
	run(){
	    MainButtonActions.preamble();

	    setTimeout(function(){
		MainPageHandler.haplomodeload();

		setTimeout(function()
			   {
			       var usedesc = true;
			       var haplo_text  = localStorage.getItem("TEST");
			       Simwalk.populateFamHaploAndDesc(haplo_text, usedesc);

		               //			FileFormat.enumerateMarkers();
			       HaploPedProps.init();
			       FileFormat.__endFuncs(usedesc);
			   }, 500);
	    }, 500);			
	}
    },

    Homology : {
	run(){
	    userOpts.fancyGraphics = false;
	    userOpts.setGraphics();
	    MainButtonActions.loadHaploFromStorage();

	    setTimeout(function(){
		SelectionMode.init();
		SelectionAction.selectAffecteds();
		HaploWindow.init();

		setTimeout(function(){
		    HomologySelectionMode.init();
		    SelectionAction.selectAffecteds();
		    HomologySelectionMode.submit();

		    // setTimeout(function(){
		    // 	HomologyButtons._printCurrent();
		    // }, 1000);
		},1000);
	    },1000);
	}
    },

    Colors : FounderColor.testColors,
    
    PedCreate : {
	run(){
	    MainButtonActions.createNewPed()

	    familyDraw.addFam(1001)

	    personDraw.addNode(
		new Person(12,2,2),
		{x:0, y:50}
	    );

	    personDraw.addNode(
		new Person(11,1,1),
		{x:180, y:50}
	    );

	    personDraw.addNode(
		new Person(23,1,2),
		{x:90, y:150}
	    );
	}
    }
}

//Test.Homology.run()

function randomIndex(len){
	return Math.floor(Math.random() * len);
}


var BenchAllele  = {

	disease_allele : null,
	allele_size : 16,
	__alleles_in_use : {},


	newNonDiseaseAllele: function()
	{
		if (BenchAllele.disease_allele === null)
		{
			BenchAllele.disease_allele = [];
			for (let i=0; i < BenchAllele.allele_size; i++){ 
				BenchAllele.disease_allele.push(1); 
			}
				
			BenchAllele.__alleles_in_use[ BenchAllele.disease_allele.join("") ] = true;
			//console.log("Defining new disease_allele", BenchAllele.disease_allele);
		};

		let new_all = [];
		for (let i=0 ; i < BenchAllele.disease_allele.length; i++){ new_all.push( [1,2,3,4,5,6,7,8][randomIndex(8)] ); };
		let key = new_all.join("")

		//console.log(key);

		// Each FA must be unique
		if (key in BenchAllele.__alleles_in_use){
			return BenchAllele.newNonDiseaseAllele();
		}

		BenchAllele.__alleles_in_use[key] = true
		return new_all;
	},

	performMeiosis: function(all1,all2)
	{
		if ( all1.length !== all2.length){
			console.error("Allele lengths do not match");
			return 0;
		}

		let buff = Math.floor(all1.length / 2);
		let allele_len = buff + all1.length + buff; // buffer on each side
		// if number falls in 0:5 or -5:1, then no recombination occurs

		let index_split = randomIndex(allele_len);

		if (index_split < buff)             { return all1;}
		if (index_split > allele_len - buff){ return all2;}

		// Otherwise recombination
		index_split -= buff;
		return all1.slice(0,index_split).concat(all2.slice(index_split,));
	}
}

class BenchPerson  extends Person {

	init(){
		if (BenchPerson.generation_map === undefined){
			BenchPerson.generation_map = {}
		}
	}

	constructor(generation, gender = 0, mother = null, father = null) {
		super();

		this.init();

		this.generation = generation;
		this.gender = ((gender===0)?this.randomGender():gender);

		try {
			this.id = this.randomID()
		} catch (rangerror){
			location.refresh(true)
		} 

		this.mother = mother
		this.father = father


		this.__temp_haplo_data = []

		if (this.mother !== null){
		    this.simulateMeiosis();        // Non-Founder
		}
		else {
		    this.generateFounderAlleles(); // Founder
		}
		
		this.affected = this.determineAffectation(); // has the right disease allele locus ?
	}

	determineAffectation(){
		return 1; // TODO
	}

	findAvailableCousin(){
		let cousins = BenchPerson.generation_map[this.generation]; // Same generation

		for (let c_id in cousins)
		{
			let cousin = cousins[c_id];

			if (cousin.mother === null){ continue; }    
		    if (cousin.mother.id === this.mother.id || cousin.father.id === this.father.id){ continue; } // Not Sibs
		    if (cousin.gender === this.gender){ continue; } // Straight
		    if (cousin.mates.length > 0){ continue; } // Available
		    //  console.log("inbreeding:", this.id, cousin.id);	    
		    return cousin;
		}
		return null; // no matches found
	}


	simulateMeiosis(){
		this.__temp_haplo_data.push( BenchAllele.performMeiosis(
			this.mother.__temp_haplo_data[0], this.mother.__temp_haplo_data[1]) )
		this.__temp_haplo_data.push( BenchAllele.performMeiosis(
			this.father.__temp_haplo_data[0], this.father.__temp_haplo_data[1]) )
	}

	generateFounderAlleles(){
		this.__temp_haplo_data.push( BenchAllele.newNonDiseaseAllele() )
		this.__temp_haplo_data.push( BenchAllele.newNonDiseaseAllele() )
	}

	randomGender(){
		return 1 + randomIndex(2);
	}

	randomID(modif = 1){
		
		let ext = this.gender * modif, // males odd, females even,
		num = (this.generation * 10000) + ext;

		//console.log("generation", this.generation, num, modif, ext)
		if (!(this.generation in BenchPerson.generation_map)){
			BenchPerson.generation_map[this.generation] = {}
		}

		if (num in BenchPerson.generation_map[this.generation]){
			return this.randomID(modif + 1);
		}

		// Otherwise result
		BenchPerson.generation_map[this.generation][num] = this;
		return num
	}
}

var BenchStopwatch = {
    __timeStart : null,
    __timeEnd   : null,
    __diff      : null,
    __callback  : null,

    /*_records : [],
    _record_names : [],*/
   
    start : function(callback = null){
        BenchStopwatch.__diff = null;
        BenchStopwatch.__callback = callback;
        BenchStopwatch.__timeStart = performance.now();

    },

    stop : function(){
    	if (BenchStopwatch.__timeStart !== null){
	        BenchStopwatch.__timeEnd = performance.now();
	        BenchStopwatch._logDiff();
	    }
    },

    terminate : function(){}, // To be swapped in for a custom one upon failure

    _resetTimes : function(){
        BenchStopwatch.__timeStart = null;
        BenchStopwatch.__timeEnd   = null;
        BenchStopwatch.__callback  = null
        //BenchMark.__diff = null;
    },

    _logDiff : function(){
        var d = BenchStopwatch.__timeEnd - BenchStopwatch.__timeStart;
        BenchStopwatch.__diff =  d;

        if (BenchStopwatch.__callback !== null){
            BenchStopwatch.__callback(d)
        }

        BenchStopwatch._resetTimes();
    },

    getDiff: function(){
        return BenchStopwatch.__diff;
    },
}

class TreeGenerator {

    constructor(num_roots, num_gens, allele_size = 16, inbreed_chance = 0.1)
    {
        if (num_gens === undefined){
            console.log("give root and generations");
            return 0;
        }

        BenchAllele.allele_size = allele_size;

        this.max_generations = num_gens;
        this.chance_of_inbreeding = inbreed_chance;

        // To be filled
        this.num_people = 0;
        this.inbred_couples = {};

        for (let i=0; i < num_roots; i++)
        {
            let root_indiv = new BenchPerson(1); // generation 0
            this.germinate(root_indiv);    
        }
    }

    printmetrics(){
        /*console.log(" [Results: num_people=" + this.num_people + "inbred_couples=" + Object.keys(this.inbred_couples).length + "] ");
        console.log("   Inbred_couples=", this.inbred_couples)
        console.log("   Generations", Object.keys(BenchPerson.generation_map).map( i => i+": "+Object.keys(BenchPerson.generation_map[i]).length ), BenchPerson.generation_map);*/
        return { numpeople: this.num_people, numinbredcouples: Object.keys(this.inbred_couples).length };
    }


    germinate(perc){
        // Perc is a pre-existing individual of unknown gender

        // first generations have higher chance of mating and producing more kids
        // lower generations have higher chance of inbreeding
        let generation = perc.generation
        let gen_modif = this.max_generations - generation;

        this.num_people += 1
        //console.log("Germinate", perc.id, generation, gen_modif, this.num_people)

        if (gen_modif === 0){
            // reached max generation
            return 0
        }

        // First generation root individuals *must* have a mate
        let hasMate = (gen_modif * Math.random()) > 0.5 || generation < 2;
        if (hasMate){
            let perc_gender = perc.gender,
            mate_gender = perc_gender===2?1:2;

            let mate = null,
                breeding_chance = this.chance_of_inbreeding * (generation / this.max_generations);

            if (breeding_chance > Math.random()){
                // Mate is a cousin
                mate = perc.findAvailableCousin()
            }

            if (mate !== null){
                this.inbred_couples[perc.id + "__" + mate.id] = true
            }
            else {
                // Mate is a new founder
                mate = new BenchPerson(generation, mate_gender, null, null)
                //console.log("random mate", mate);
            }

            perc.addMate(mate);
            mate.addMate(perc);

            let father = perc_gender===1?perc:mate;
            let mother = perc_gender===2?perc:mate;

                // All mates must produce at least 1 offspring 
                let numOff = 1 + randomIndex(gen_modif)
                //console.log("   kids:", numOff)
                for (let n=0; n < numOff; n++)
                {
                    let child = new BenchPerson(generation + 1, 0, mother, father)
                    perc.addChild(child);
                    mate.addChild(child);

                // and recurse
                this.germinate(child)
            }
        }
        return 0;
    }


    populateGraphics(){
        this.__insertIntoGlobalMaps();
    }


    __transposedHeaders(num, initial_buff, spacer){
        // Make regular headers
        var markers = [];
        for (let i = 1; i <= num ; i++){
            let nn = "" + i + "",
                nlen = nn.length;

            let name = "mm1000000";
            name = name.slice(0,-nlen) + nn
            markers.push( name );
        }

        // Transpose
        let str_array = "";

        for (let i = markers[0].length -1 ; i >= 0; i--){  // cols
            str_array += initial_buff;
            let tmp_array = []
            for (let j= 0 ; j < markers.length; j++){
                let lett = markers[j][i]
                tmp_array.push( lett );
            }
            str_array += tmp_array.join(spacer) + spacer;
            str_array += '\n'
        }
        return str_array;
    }


    static paddID(id, amount = 5){
        return (id + "          ").slice(0,amount)
    }


    exportToHaploFile(){
        var fam = 9999;

        var text = "";
        var spacer = "  ";

        var headers_done = false;

        let padd_amount = 5;
        let preamble_length = (padd_amount * 4) + (7 * spacer.length); // max allowed space for ped data before  header columns kick in
        let preamble_stage = "                                                           ".slice(0,preamble_length);

        let pd = function(sd){
            return TreeGenerator.paddID(sd, padd_amount);
        }

        // Indiv Data
        for (let gen in BenchPerson.generation_map)
        {
            let indivs = BenchPerson.generation_map[gen];
            for (let i in indivs)
            {
                let ind = indivs[i];

                if (!headers_done){
                    // Marker Headers
                    text += this.__transposedHeaders(ind.__temp_haplo_data[0].length, preamble_stage, spacer)
                    text += '\n'
                    headers_done = true;
                }

                let mat = ind.mother === null?0:ind.mother.id,
                    pat = ind.father === null?0:ind.father.id;


                let preamble = [pd(fam), pd(ind.id), pd(pat), pd(mat), ind.gender, ind.affected].join(spacer);

                text += preamble +  spacer + ind.__temp_haplo_data[0].join( spacer ) + '\n'
                text += preamble +  spacer + ind.__temp_haplo_data[1].join( spacer ) + '\n'
            }
        }
        //console.log(text);
        return text;
    }


    /*__insertIntoGlobalMaps(){

        var fam = 9999;

        for (let gen in BenchPerson.generation_map)
        {
            let indivs = BenchPerson.generation_map[gen]
            for (let i in indivs){
                let ind = indivs[i];

                let mat = ind.mother === null?0:ind.mother.id,
                    pat = ind.father === null?0:ind.father.id;

                let pers = new Person(ind.id, ind.gender, ind.affected, mat, pat);
                pers.insertHaploData( ind.__temp_haplo_data[0] )
                pers.insertHaploData( ind.__temp_haplo_data[1] )
                familyMapOps.insertPerc(pers, fam);  
            }
            //console.log(gen, indivs);
        }
    }*/
}



var BenchMark = {

    /*record(text){
        let key = "benchrecords";

        if (localStorage.getItem(key) === null){
            localStorage.setItem(key, "Tree Generation:\tRootFounders\tMaxGen\tAlleleSize\tInbreedChance\tNumPeople\tNumInbredCouples\tTimingTreeGen\tTimingRender\n")
        }

        var tttt = localStorage.getItem(key)
        tttt += text;

        localStorage.setItem(key, tttt);
        console.log("logged:", text);
    },*/

    exportData(){
        exportToTab( localStorage.getItem("benchrecords") );
    },

    launch_with_props( rootfounders, maxgen, allelesize, inbreedchance, exportToFile,
        endfunction = function(timetree, numpeople, numinbredcouples, timerender){},
        termfunction= function(){})
    {
        BenchStopwatch.terminate = function(text){
            termfunction(text);
        }


        BenchStopwatch.start();
        var tg = new TreeGenerator(rootfounders, maxgen, allelesize, inbreedchance);
        BenchStopwatch.stop();

        var treetime= BenchStopwatch.getDiff(),
            metrics = tg.printmetrics();

        // Completed in FileFormat_superclass.js
        BenchStopwatch.start(
            function (rendertime) {
                endfunction(treetime, metrics.numpeople, metrics.numinbredcouples, rendertime);
            }
        );

        var text = tg.exportToHaploFile();
        if (exportToFile){
            exportToTab( text );
        }
        //BenchStopwatch.terminate(errors);

        new Allegro(null, text);    
    },

    launch_display(){
        benchProps.display(function(rootfounders, maxgen, allelesize, inbreedchance, exportToFile)
        {
            BenchMark.launch_with_props( rootfounders, maxgen, allelesize, inbreedchance, exportToFile);
        });
    }
}

// Singleton
function onWindowLoad(){
    
    (function browserDetection(){
        //
        //Quick browser detector
        //
        navigator.sayswho= (function(){
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return ['IE',(tem[1] || '')];
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                if(tem!= null) return [tem.slice(1)] //.join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M; //M.join(' ');
        })();

        var browser_name = navigator.sayswho[0],
            browser_vers = navigator.sayswho[1];

        var browser_flag = false;


        function exit( status ) {
            var i;
            document.getElementById('content').innerHTML="<head>"+status+"</head><body></body>"

            function stopPropagation (e) {e.stopPropagation();}
            window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

            var handlers = [ 'copy', 'cut', 'paste', 'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll', 'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput', 'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'];

            for (i=0; i < handlers.length; i++) {window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);}
            if (window.stop){window.stop();}
            throw '';
        }

        if (!(
               (browser_name === "Chrome" && browser_vers >= 43)
            || (browser_name === "Firefox" && browser_vers >= 38)
           )) {
            console.log(browser_name, browser_vers)
            exit("<h1 style=\"color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 100px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center;  \" >NOPE.</h1><h2 style=\"color: #111; font-family: 'Open Sans', sans-serif; font-size: 30px; font-weight: 300; line-height: 32px; margin: 0 0 72px; text-align: center;\" >Not This Browser.<br/>Not In A Million Years.<br/><br/>Try <a href=\"https://www.mozilla.org/en-US/firefox/new/\" style='color:DarkOrange; text-decoration:none;font-family:\"Papyrus\",fantasy;' >Firefox</a> or <a style='color:DodgerBlue;text-decoration:none;font-family:\"Arial\",sans-serif;' href=\"http://chromium.woolyss.com/\">Chromium.</a><br/><div style='font-size:12px;'>Chrome/Opera/Safari (if you must...)</div></h2>");
        }
    })();

    // Define all load modes here
    //document.getElementById('user_tooltips').checked = userOpts.retrieve('showTooltips');
    document.getElementById('user_fancy').checked = userOpts.retrieve('fancyGraphics');
    userOpts.setGraphics();
    Settings.init();

    //setTimeout(function(){
    //    Test.Benchmark.start();
    //}, 1000);
}

onWindowLoad(); // singleton in a singleton is frowned upon

var Resize = {

	numVisibleHaplos: -1,

	updateHaploScrollHeight : function(new_lim = null)
	{
		HAP_DRAW_LIM = new_lim || Resize.numVisibleHaplos;

		// For small sets, shrink HAP_DRAW_LIM
		var num_marks = MarkerData.getLength() - 1;
		if (HAP_DRAW_LIM > num_marks){
			HAP_DRAW_LIM = num_marks;
		}


		HaploBlock.end_index = HaploBlock.sta_index + HAP_DRAW_LIM;
	
		HaploWindow._bottom.rect.setHeight(
			(HAP_DRAW_LIM+3) * HAP_VERT_SPA 
		);

		HaploBlock.redrawHaplos();
		SliderHandler.updateInputsByIndex();
		SliderHandler.updateSlide();
	},

	getYOffset : function (){
		return HaploWindow._top.rect.getAbsolutePosition().y 
			+ HaploWindow._top.rect.getHeight()
			+ 10;

	},

	resizeCanvas : function(playing = 90)
	{  	
	    if (stage !== null){
	        var stageHeight = window.innerHeight - 4;

	    	var newWidth = window.innerWidth;

	        if (HaploWindow._background !== null)
	        {
	        	// Check width
	            var defWidth = HaploWindow._top.rect.getWidth()
	                         + HaploWindow._top.rect.getAbsolutePosition().x 
	                         + 120; // 120 for CSS

	            var width_over = false;

	            if (defWidth > newWidth){
	            	newWidth = defWidth;
	            	width_over = true;
	            }

	            HaploWindow._background.setWidth(newWidth);
	            SelectionMode._background.setWidth(newWidth);
	            stage.setWidth(newWidth);


	            // Update the number of visible haplotypes number
	            Resize.__numFittableHaplos();

	            // Check height
	            if (HAP_DRAW_LIM > Resize.numVisibleHaplos + 2){
	            	var y_offs = Resize.getYOffset()
	                stageHeight = y_offs + ((HAP_DRAW_LIM+3) * HAP_VERT_SPA );
	            }

	            Resize.updateHaploScrollHeight(
	            	SliderHandler.inputsLocked?null:HAP_DRAW_LIM 
	            );

	            if (width_over){
	            	//Shorten height slightly caused by horizontal scroller now in existence
	            	stageHeight -= 15; // 15px
	            }

	            HaploWindow._background.setHeight(stageHeight);
	            SelectionMode._background.setHeight(stageHeight);
	            stage.setHeight(stageHeight);

	            if (  ModeTracker.currentMode === ModeTracker.modes.pedcreate
	                ||ModeTracker.currentMode === ModeTracker.modes.haploview){
	                  FamSpacing.init(20);
	            }

	            
	            haplo_layer.draw();
	        }
	        else {
	            stage.setHeight(stageHeight);
		    	stage.setWidth(newWidth);
	        }
	    }
	},

	__numFittableHaplos : function(){
		var y_offset = Resize.getYOffset(),
			avail_space = window.innerHeight - y_offset;

		Resize.numVisibleHaplos = Math.floor( avail_space / HAP_VERT_SPA ) - 6;

	}
}


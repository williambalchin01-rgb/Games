/* The case that actually matters: a receiver catching it in space. */
var fs=require("fs");
var base=fs.readFileSync("/home/user/Games/gridiron.html","utf8").split("\n");
var a=base.findIndex(l=>l.trim()==="<script>");
var z=base.findIndex(l=>l.indexOf("function el(")>=0);
var SRC=base.slice(a+2,z).join("\n");
function core(ref){ var out={}; new Function("exports", SRC+
 "\n;['newGameState','makeRng','buildPlay','snapBall','stepPlay','scramble','FIELD_W','FIELD_L'].forEach(function(k){try{exports[k]=eval(k)}catch(e){}});")(out); return out; }
var out=core();
function yac(seed, depth, steer){
  var st=out.newGameState(seed,{}); st.ballOn=25;
  var rng=out.makeRng(seed);
  var play=out.buildPlay(st,rng);
  out.snapBall(play);
  var t=0;
  // let the routes develop, then hand the ball to the deepest receiver
  while(t < depth){ out.stepPlay(st,play,1/60,rng); t+=1/60; }
  var rec=play.recs.reduce(function(A,B){ return B.y>A.y?B:A; });
  play.phase="carry"; play.carryT=play.t; play.carrier=rec;
  var caughtAt=rec.y;
  while(play.phase!=="done" && t<24){
    if(steer){
      var c=play.carrier,best=null,bs=-1e9;
      for(var x=1.5;x<=out.FIELD_W-1.5;x+=1){
        var near=1e9;
        play.defs.forEach(function(d){ if(d.y>c.y-1) near=Math.min(near,Math.hypot(d.x-x,d.y-c.y)); });
        var sc=near-Math.abs(x-c.x)*0.25;
        if(sc>bs){bs=sc;best=x;}
      }
      play.steerX=best;
    }
    out.stepPlay(st,play,1/60,rng); t+=1/60;
  }
  return { after:(play.result?play.result.at:caughtAt)-caughtAt, kind:play.result?play.result.kind:"none" };
}
[1.2, 2.0, 2.8].forEach(function(depth){
  [false,true].forEach(function(steer){
    var g=0,n=250,big=0,tds=0;
    for(var i=1;i<=n;i++){ var r=yac(i*2654435761>>>0, depth, steer); g+=r.after; if(r.after>=10) big++; if(r.kind==="touchdown") tds++; }
    console.log("catch after "+depth.toFixed(1)+"s "+(steer?"steered":"straight")+
      ": yards after the catch "+(g/n).toFixed(1)+"   10+ yards "+(big/n*100).toFixed(0)+"%   ran it in "+(tds/n*100).toFixed(0)+"%");
  });
});

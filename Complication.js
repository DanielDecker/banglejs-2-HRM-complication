;(function () {
  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth   = g.getWidth() / 2;
    let largeComplication = (x === halfScreenWidth);

    // init font
    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let bp = Math.round(Bangle.getHealthStatus().bpm||Bangle.getHealthStatus("last").bpm);
    g.drawString(bp, x,y);

    if (Bangle.isHRMOn()) {
      g.setColor('#f00');     // on = red
    } else {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    }

    // move write possition
    x += g.stringWidth(bp);
    
    let Text = 'bpm';
    if (!largeComplication) {
      // shrink & rotate bpm text
      g.setFontAlign(0, 0, 3);
      g.setFont('Vector', 10);
      x += 3;
      y += 4;
    }
    g.drawString(Text, x,y);
    
  };
})();

;(function () {
  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth   = g.getWidth() / 2;
    let largeComplication = (x === halfScreenWidth);

    // init font
    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let bp = Math.round(Bangle.getHealthStatus().bpm||Bangle.getHealthStatus("last").bpm);
    let textLength = g.stringWidth(bp);
    let spaceLenth = 6;
    
    if (largeComplication) {
      // move hear rate count left, so overall reading is centered
      x -= (textLength + spaceLenth);
    }
    
    g.drawString(bp, x,y);

    if (Bangle.isHRMOn()) {
      g.setColor('#f00');     // on = red
    } else {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    }

    // move write possition
    x += textLength;
    
    let Text = 'bpm';
    if (largeComplication) {
      x += spaceLenth;
    } else {
      // shrink & rotate bpm text
      g.setFontAlign(0, 0, 3);
      g.setFont('Vector', 10);
      x -= 10;
      y -= 2;
    }
    g.drawString(Text, x,y);
    
  };
})();

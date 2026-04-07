<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your school, in your pocket</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .wrapper {
    position: relative;
    width: 780px;
    max-width: 95vw;
  }
  .banner {
    background: #e2e2e2;
    border-radius: 22px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 32px 260px 32px 44px;
    gap: 24px;
  }
  .text { flex: 1; }
  .text h1 {
    font-size: 36px;
    font-weight: 500;
    color: #111;
    line-height: 1.2;
  }
  .text p {
    font-size: 16px;
    color: #666;
    margin-top: 5px;
  }
  .qr img {
    width: 110px;
    height: 110px;
    object-fit: contain;
    display: block;
  }
  .iphone {
    position: absolute;
    right: -10px;
    top: -60px;
    width: 240px;
    pointer-events: none;
  }
  .iphone img {
    width: 100%;
    display: block;
    object-fit: contain;
  }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="banner">
      <div class="text">
        <h1>Your school, in<br>your pocket.</h1>
        <p>scan to download</p>
      </div>
      <div class="qr">
        <img src="https://i.ibb.co/0jWb4JFB/qr-code-2-1.png" alt="QR Code">
      </div>
    </div>
    <div class="iphone">
      <img src="https://i.ibb.co/QFjkrDWS/iphone.png" alt="iPhone">
    </div>
  </div>
</body>
</html>
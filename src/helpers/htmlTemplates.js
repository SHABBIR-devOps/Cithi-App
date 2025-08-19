const otpVerifecationTemplate = (userName,otp)=>{
    return(
        `
    <!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>OTP Verification</title>
  <style>
    /* --- Reset / Email-safe styles --- */
    html,body{margin:0;padding:0;height:100%;width:100%;background:#f4f7fb}
    table{border-collapse:collapse}
    img{border:0;display:block}

    /* --- Design tokens --- */
    :root{
      --bg:#f4f7fb;
      --card:#ffffff;
      --muted:#6b7280;
      --primary:#0f6b6a; /* deep teal */
      --accent:#06b6d4; /* bright teal */
      --accent-2:#fecb6e; /* warm accent */
      --radius:14px;
      --shadow:0 10px 30px rgba(18,38,63,0.08);
      --mono: 'Courier New', Courier, monospace;
    }

    /* --- Container --- */
    .wrap{padding:28px 16px}
    .container{width:640px;max-width:100%;margin:0 auto}

    /* --- Header --- */
    .header{display:flex;align-items:center;gap:12px;padding:18px 22px 0}
    .logo-circle{width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,var(--primary),var(--accent));display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px}
    .brand{font-family:Arial,Helvetica,sans-serif;font-size:18px;color:#07252a;font-weight:700}

    /* --- Card --- */
    .card{background:var(--card);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;margin-top:16px}
    .card-inner{padding:28px}
    h1{font-family:Inter, Arial, sans-serif;font-size:20px;margin:0 0 8px;color:var(--primary)}
    p.lead{margin:0 0 18px;color:#334155;font-size:14px;line-height:1.6}

    /* --- OTP area --- */
    .otp-wrap{text-align:center;margin:6px 0 22px}
    .otp-pill{display:inline-block;background:linear-gradient(90deg,#e6fbfc,#ffffff);border-radius:10px;padding:14px 20px;border:1px solid rgba(6,182,212,0.14)}
    .otp-code{font-family:var(--mono);font-size:32px;letter-spacing:8px;color:#08363a;font-weight:700}

    /* per-digit boxes (alternative) */
    .digits{display:inline-block;margin-top:6px}
    .digit{display:inline-block;width:48px;height:60px;line-height:60px;margin:0 6px;border-radius:8px;background:#fff;border:1px solid #e6eef2;font-family:var(--mono);font-size:20px;font-weight:700;color:#08363a}

    /* --- Support and footer --- */
    .muted{color:var(--muted);font-size:13px}
    .support{color:var(--primary);text-decoration:none;font-weight:600}
    .footer{padding:18px 28px 28px;font-size:12px;color:#9aa3ad;text-align:center}

    /* --- Responsive --- */
    @media screen and (max-width:600px){
      .card-inner{padding:18px}
      .logo-circle{width:48px;height:48px;font-size:16px}
      .digit{width:40px;height:50px;line-height:50px;margin:0 4px}
    }

    /* Dark mode */
    @media (prefers-color-scheme:dark){
      :root{--bg:#071018;--card:#071426;--primary:#4fd1c5;--accent:#06b6d4}
      body{background:var(--bg)}
      h1{color:var(--primary)}
      .card{background:var(--card);box-shadow:none}
      .otp-pill{background:linear-gradient(90deg,#05232a,#062f33);border-color:rgba(255,255,255,0.04)}
      .otp-code{color:#e6fffb}
      .digit{background:#071426;border-color:#0b2a2c;color:#d6fffb}
      .brand{color:#e6f9f8}
      .footer{color:#6b7280}
    }
  </style>
</head>
<body style="margin:0;padding:0;background:var(--bg);font-family:Arial,Helvetica,sans-serif;">
  <!-- preview text -->
  <div style="display:none;max-height:0;overflow:hidden"> ${otp} expires in 2 minutes</div>

  <div class="wrap">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <div class="logo-circle">{{APP_INITIALS}}</div>
        <div class="brand">Cithi</div>
      </div>

      <!-- Card -->
      <table role="presentation" width="100%" class="card" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="card-inner">
            <h1>One‑time verification code</h1>
            <p class="lead">Hi ${userName},<br>
            Enter the code below to confirm your email for <strong>Cithi</strong>. For your safety, the code will expire in <strong>2 minutes</strong>.</p>

            <!-- OTP single display (recommended) -->
            <div class="otp-wrap">
              <div class="otp-pill">
                <div class="otp-code">${otp}</div>
              </div>

              <!-- Uncomment to use per-digit boxes instead of the single code above -->
              <!--
              <div class="digits" aria-hidden="true">
                <span class="digit">5</span>
                <span class="digit">7</span>
                <span class="digit">2</span>
                <span class="digit">9</span>
                <span class="digit">1</span>
                <span class="digit">3</span>
              </div>
              -->

            </div>

            <p class="muted">Please do not share this code with anyone. We will never ask for your verification code.
            If you did not request this, ignore this email or <a href="mailto:{{SUPPORT_EMAIL}}" class="support">contact support</a>.</p>

          </td>
        </tr>
      </table>

      <div class="footer">© {{YEAR}} {{APP_NAME}} • {{COMPANY_ADDRESS}}</div>
    </div>
  </div>

  <!-- gmail fix -->
  <div style="white-space:nowrap;font:15px courier;line-height:0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
</body>
</html>

`
    
    ) 
}




module.exports={otpVerifecationTemplate}
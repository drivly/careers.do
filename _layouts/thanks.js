const thanks = (name, imageUrl) => `
<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
</head>

<body>
  <header class="absolute inset-x-0 top-0 h-16 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <nav class="relative z-50 flex justify-between items-center">
        <div>
          <a aria-label="Home" href="https://driv.ly" target="_blank">
            <img class="mx-auto h-8"
              src="https://uploads-ssl.webflow.com/60bee04bdb1a7a33432ce295/60beeb6f38814ea48d5c7c02_Drivly_logo_light.svg" />
          </a>
        </div>
        <div class="flex items-center block"></div>
      </nav>
    </div>
  </header>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#060611] py-4 sm:py-1">
    <div class="mx-auto max-w-7xl px-4 sm:py-10 text-center sm:px-6 lg:px-8">
      <!-- Call Out -->
      <div class="mx-auto py-5">
        <span
          class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-[#00cab9]/25 text-[#00cab2]">
          Success
        </span>
      </div>
      <h1 class="mx-auto max-w-5xl font-bold tracking-tight text-slate-50 md:text-6xl text-6xl">
        Thanks for applying${name ? ', ' + name : ''}! 🎉
      </h1>

      <div class="mx-auto mt-6 max-w-2xl text-md tracking-loose text-slate-400 prose py-3">
        What happens next? We will review your profile and if we think you'd be a good fit for the role, we will reach
        out to set up an initial call!
      </div>

    </div>
  </div>
</body>

</html>`

export default thanks

import { Router } from 'itty-router'
import thanks from './_layouts/thanks'
const router = Router()

router.get('/apply', async (req) => {
  return new Response(null, {
    status: 302,
    headers: {
      location: "/login?redirect_uri=" + new URL(req.url).origin + "/thanks",
    }
  })
})


router.get('/thanks', async (req, env) => {
  const { user } = await env.CTX.fetch(req).then(res => res.json())
  if (!user.authenticated) {
    return new Response(null, {
      status: 302,
      headers: {
        location: '/',
      }
    })
  }

  let githubUser = await env.USERS.get(user.profile.id).then(JSON.parse)
  await fetch(env.SLACK_WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ icon_url: user.profile.image, text: `careers.do just collected a new candidate! ${githubUser.user.html_url}` }) })
  return new Response(thanks(user.profile.name), {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  })
})


router.get('*', req => fetch(req))

export default {
  fetch: router.handle
}


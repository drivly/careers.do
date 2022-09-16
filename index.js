import { IncomingWebhook } from '@slack/webhook'
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
  const url = env.SLACK_WEBHOOK_URL
  const webhook = new IncomingWebhook(url)
  await webhook.send({
    text: `careers.do just collected a new candidate! <a href="https://github.com/${user.name}">${user.name}</a>`,
  })
  return new Response(thanks(), {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  })
})


router.get('*', req => fetch(req))

export default {
  fetch: router.handle
}


import { useState } from 'react'

import { buildMailto } from '../../lib/mailto'
import { MacWindow } from '../MacWindow/MacWindow'

import './MailComposer.css'

const TOPICS = ['Co-founding', 'Collaboration', 'Small label', 'Just saying hi'] as const
const GREETING = 'Hi Donghyun,\n\n'
const COPY_RESET_MS = 1800

type CopyState = 'idle' | 'copied' | 'failed'

interface MailComposerProps {
  email: string
}

/** A macOS Mail "New Message" window that hands a pre-filled draft to the visitor's mail app. */
export function MailComposer({ email }: MailComposerProps) {
  const [topic, setTopic] = useState<string>(TOPICS[0])
  const [body, setBody] = useState(GREETING)
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyState('copied')
    } catch (error) {
      console.error('MailComposer: clipboard write failed, the visitor must copy the address by hand', error)
      setCopyState('failed')
    }
    window.setTimeout(() => setCopyState('idle'), COPY_RESET_MS)
  }

  const copyLabel = { idle: 'Copy address', copied: 'Copied', failed: 'Select it above' }[copyState]

  return (
    <MacWindow title="New Message" className="composer">
      <div className="composer__row">
        <span className="composer__key">To:</span>
        <span className="composer__to">{email}</span>
      </div>

      <div className="composer__row composer__row--subject">
        <span className="composer__key">Subject:</span>
        <div className="composer__topics" role="radiogroup" aria-label="Subject">
          {TOPICS.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={topic === option}
              className="composer__topic"
              onClick={() => setTopic(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <textarea
        className="composer__body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        aria-label="Message"
        rows={6}
      />

      <div className="composer__actions">
        <button type="button" className="composer__copy" onClick={copyAddress}>
          {copyLabel}
        </button>
        <a className="composer__send" href={buildMailto(email, topic, body)}>
          Send
        </a>
      </div>
    </MacWindow>
  )
}

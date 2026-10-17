const DHAKA = 'Asia/Dhaka'

const dhakaDateKey = (value) => {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: DHAKA,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

// A date-only deadline stays open through 23:59:59 in Dhaka.
// Comparing calendar dates avoids treating UTC midnight as 6:00 in the morning.
export const isJobClosed = (job, now = new Date()) => {
  if (!job?.deadline) return false
  const raw = String(job.deadline).trim()
  const dateOnly = raw.slice(0, 10)
  const deadlineKey = /^\d{4}-\d{2}-\d{2}$/.test(dateOnly) && raw.length <= 10
    ? dateOnly
    : dhakaDateKey(job.deadline)
  if (!deadlineKey) return false
  return dhakaDateKey(now) > deadlineKey
}

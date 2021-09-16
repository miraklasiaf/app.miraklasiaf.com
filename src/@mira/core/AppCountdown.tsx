// @ts-nocheck
import { Typography, CardContent, Grid } from '@mui/material'
import moment from 'moment'
import clsx from 'clsx'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

function AppCountdown(props) {
  const { onComplete } = props
  const [endDate] = useState(moment.isMoment(props.endDate) ? props.endDate : moment(props.endDate))
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const intervalRef = useRef()

  const complete = useCallback(() => {
    window.clearInterval(intervalRef.current)
    if (onComplete) {
      onComplete()
    }
  }, [onComplete])

  const tick = useCallback(() => {
    const currDate = moment()
    const diff = endDate.diff(currDate, 'seconds')
    if (diff < 0) {
      complete()
      return
    }
    const timeLeft = moment.duration(diff, 'seconds')
    setCountdown({
      days: timeLeft.asDays().toFixed(0),
      hours: timeLeft.hours(),
      minutes: timeLeft.minutes(),
      seconds: timeLeft.seconds()
    })
  }, [complete, endDate])

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [tick])

  return (
    <CardContent>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h4" className="mb-4" align="center">
            {countdown.days}
          </Typography>
          <Typography color="textSecondary" align="center">
            days
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" className="mb-4" align="center">
            {countdown.hours}
          </Typography>
          <Typography color="textSecondary" align="center">
            hours
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" className="mb-4" align="center">
            {countdown.minutes}
          </Typography>
          <Typography color="textSecondary" align="center">
            minutes
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" className="mb-4" align="center">
            {countdown.seconds}
          </Typography>
          <Typography color="textSecondary" align="center">
            seconds
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default memo(AppCountdown)

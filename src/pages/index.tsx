import { AppCountdown, AppPage } from '@mira/core'
import { motion } from 'framer-motion'
import { Default } from 'layouts'
import { CardContent, Typography, Card, Grid } from '@mui/material'

export default function HomePage() {
  return (
    <AppPage title="Faisal Karim" layout={Default}>
      <Grid container justifyContent="center" alignItems="center">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img className="w-24 my-8 mx-auto" src="static/images/logo.png" alt="logo" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginTop: '12px' }}>
                    <Typography variant="subtitle1" className="mb-16 font-semibold" align="center">
                      Hey! Thank you for checking out my app.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography color="textSecondary" className="max-w-xl" align="center">
                      It’s not quite ready yet, but i am working hard and it will be ready in
                      approximately:
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <AppCountdown endDate="2021-10-30" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </motion.div>
      </Grid>
    </AppPage>
  )
}

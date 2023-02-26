import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

export const MultiActionAreaCard = (props) => {
  const { label, values } = props;
  return (
    <Card sx={{ width: '345px' }} >  
    {/* boxshadow: "none" */}
      <CardActionArea>
        <CardContent >
          <Typography color="rgb(17, 34, 78)" gutterBottom variant="h5" component="div">
            {label}
          </Typography>

          <Stack spacing={2}>
            {values.map((cur) =>
              <Stack direction="row" alignItems="center" spacing={1} padding ='9.5px'>
                {cur.icon}
                <Typography variant="h6" color="text.secondary">
                  {cur.value}
                </Typography>
              </Stack>)}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
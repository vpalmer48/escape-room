import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React from 'react';

export default function LED({color, ledPatternArray}) {

    const getColor = (value) => (value === 0 ? 'black' : color);

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', backgroundColor: '#444444' }}>
        <HorizontalRuleIcon fontSize="large" sx={{ color: getColor(ledPatternArray[0]) }}/>
        <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' }}>
        <HorizontalRuleIcon fontSize="large" style={{transform: "rotate(90deg)"}} sx={{ color: getColor(ledPatternArray[1])  }}  />
        <HorizontalRuleIcon fontSize="large" style={{transform: "rotate(90deg)"}} sx={{ color: getColor(ledPatternArray[2])  }}  />
        </div>
        <HorizontalRuleIcon fontSize="large" sx={{ color: getColor(ledPatternArray[3])  }} />
        <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' }}>
        <HorizontalRuleIcon fontSize="large" style={{transform: "rotate(90deg)"}}sx={{ color: getColor(ledPatternArray[4])  }}  />
        <HorizontalRuleIcon fontSize="large" style={{transform: "rotate(90deg)"}} sx={{ color: getColor(ledPatternArray[5])  }} />
        </div>
        <HorizontalRuleIcon fontSize="large" sx={{ color: getColor(ledPatternArray[6])  }}  />
    </div>
  );
}
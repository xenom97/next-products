import { Box, Slider, SliderProps } from '@mui/material'
import { GridFilterInputValueProps } from '@mui/x-data-grid'

export default function PriceFilterSlider(props: GridFilterInputValueProps) {
  const { item, applyValue } = props

  const handleFilterChange: SliderProps['onChange'] = (_, newValue) => {
    applyValue({ ...item, value: newValue })
  }

  return (
    <Box
      sx={{
        maxWidth: '90%',
        paddingTop: '28px',
        marginLeft: '16px',
        marginRight: '20px',
      }}
    >
      <Slider
        getAriaLabel={() => 'Price range'}
        value={item.value ? item.value : [0, 3000]}
        onChange={handleFilterChange}
        valueLabelDisplay="auto"
        min={0}
        max={3000}
      />
    </Box>
  )
}

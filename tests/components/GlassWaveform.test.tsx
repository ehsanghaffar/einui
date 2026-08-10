import { render, screen } from '@testing-library/react'
import { GlassWaveform } from '@/registry/innovative/glass-waveform'

describe('GlassWaveform', () => {
  it('renders the live visualizer by default', () => {
    render(<GlassWaveform />)
    expect(screen.getByText('Audio Visualizer')).toBeInTheDocument()
    expect(screen.getByText('Live')).toBeInTheDocument()
  })

  it('renders the frozen glass state when paused', () => {
    render(<GlassWaveform paused />)
    expect(screen.getByText('Frozen Glass')).toBeInTheDocument()
  })

  it('marks the drawing area as decorative', () => {
    render(<GlassWaveform />)
    expect(document.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })

  it('shows the settings readout when showLabels is enabled', () => {
    render(<GlassWaveform amplitude={0.5} bars={40} showLabels />)
    expect(screen.getByText('Amplitude 50%')).toBeInTheDocument()
    expect(screen.getByText('Bars 40')).toBeInTheDocument()
  })

  it('clamps the bar count to the supported range', () => {
    render(<GlassWaveform bars={2} showLabels />)
    expect(screen.getByText('Bars 4')).toBeInTheDocument()

    render(<GlassWaveform bars={200} showLabels />)
    expect(screen.getByText('Bars 96')).toBeInTheDocument()
  })

  it('applies custom class names', () => {
    render(<GlassWaveform className="custom-class" data-testid="waveform" />)
    expect(screen.getByTestId('waveform')).toHaveClass('custom-class')
  })
})

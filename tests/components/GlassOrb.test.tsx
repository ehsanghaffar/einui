import { render, screen } from '@testing-library/react'
import { GlassOrb } from '@/registry/innovative/glass-orb'

describe('GlassOrb', () => {
  it('renders as decorative by default', () => {
    render(<GlassOrb data-testid="orb" />)
    expect(screen.getByTestId('orb')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders an accessible status region when a label is provided', () => {
    render(<GlassOrb label="Loading" data-testid="orb" />)
    const orb = screen.getByTestId('orb')
    expect(orb).toHaveAttribute('role', 'status')
    expect(orb).toHaveAttribute('aria-label', 'Loading')
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('applies the pulse animation for the loading status', () => {
    const { container } = render(<GlassOrb status="loading" />)
    expect(container.querySelector('.animate-pulse')).not.toBeNull()
  })

  it('does not pulse for the idle status', () => {
    const { container } = render(<GlassOrb status="idle" />)
    expect(container.querySelector('.animate-pulse')).toBeNull()
  })

  it('applies the requested size', () => {
    const { container } = render(<GlassOrb size="lg" />)
    const orb = container.querySelector('.rounded-full')
    expect(orb).toHaveStyle({ width: '190px', height: '190px' })
  })

  it('applies custom class names', () => {
    render(<GlassOrb className="custom-class" data-testid="orb" />)
    expect(screen.getByTestId('orb')).toHaveClass('custom-class')
  })
})

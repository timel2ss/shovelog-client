import '@testing-library/jest-dom'
import { render, screen, within } from "@testing-library/react";
import Header from "@/components/header/Header";

describe('Header', () => {
  it('renders', () => {
    render(<Header/>)

    const appHeader = screen.getByRole('banner')

    const menu = within(appHeader).getByRole('menu')
    const logo = within(appHeader).getByRole('img')
    const search = within(appHeader).getByRole('search')

    expect(menu).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(search).toBeInTheDocument()
  })
})
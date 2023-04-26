import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe("Header test", () => {
  beforeEach(() => {
    render(<Router><Header></Header></Router>)
  })
  test("Header contains home"), () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
  }
})
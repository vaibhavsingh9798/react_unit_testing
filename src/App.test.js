import { render, screen } from '@testing-library/react';
import App from './App';


describe('test app with g=headers' ,()=>{

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welocme Back vaibhav/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welocme Back rahul/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welocme Back gagan/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welocme Back gaurav/i);
    expect(linkElement).toBeInTheDocument();
  });
})


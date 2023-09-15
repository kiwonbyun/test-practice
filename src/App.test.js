import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and update when click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // 위 확인이 완료되면 버튼을 클릭한다.
  fireEvent.click(colorButton);

  // 버튼이 파란색으로 바뀐다.
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // 텍스트가 바뀐다.
  expect(colorButton).toHaveTextContent(/change to red/i);
});

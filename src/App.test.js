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

test('initial conditions', () => {
  render(<App />);
  // 초기상태, 버튼의 활성화 상태 확인
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
  // 체크박스를 체크한다
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('confirm disabled button when click checkbox', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  // 체크박스가 체크되면 버튼이 비활성화 된다. 색은 회색이다.
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  // 체크박스가 해제되면 버튼이 활성화 된다. 색은 빨간색이다.
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  // 버튼을 클릭하면 파란색으로 바뀌고 활성화된 상태다.
  fireEvent.click(colorButton);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // 체크박스를 클릭하면 회색으로 바뀌고 비활성화된 상태다
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
});

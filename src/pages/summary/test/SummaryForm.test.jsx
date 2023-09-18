import { render, screen, waitFor } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('enable button when check checkbox', async () => {
  render(<SummaryForm />);
  const user = await userEvent.setup();
  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  });
  const button = screen.getByRole('button', {
    name: /confirm order/i,
  });
  // 처음에는 버튼이 비활성화 상태로 시작한다.
  expect(button).toBeDisabled();

  // 체크박스를 클릭하면 버튼이 활성화된다.
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  // 체크박스를 클릭하면 버튼이 비활성화 된다.
  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);
  const user = await userEvent.setup();

  // 팝오버가 안보이는 상태로 시작한다.
  const nullPopover = screen.queryByText(/no ice cream will/i);
  expect(nullPopover).not.toBeInTheDocument();

  // 마우스를 올리면 팝오버가 나타난다.
  const termsAndConditionSpan = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditionSpan);
  const popover = screen.getByText(/no ice cream will/i);
  expect(popover).toBeInTheDocument();

  // 마우스가 떠나면 팝오버가 사라진다.
  await user.unhover(termsAndConditionSpan);
  expect(popover).not.toBeInTheDocument();
});

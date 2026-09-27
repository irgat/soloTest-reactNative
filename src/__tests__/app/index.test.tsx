import { render } from "@testing-library/react-native";

import Index from "@/app/index";

describe("Index screen", () => {
  it("renders", async () => {
    const { toJSON } = await render(<Index />);
    expect(toJSON()).toBeTruthy();
  });
});

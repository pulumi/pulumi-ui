import { Checkbox, checkboxTemplate, CheckboxOptions } from "@microsoft/fast-foundation";
import { checkboxStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const checkbox = Checkbox.compose<CheckboxOptions>({
    baseName: "checkbox",
    template: checkboxTemplate as any,
    styles: (ctx, def) => css`
        ${checkboxStyles(ctx, def as any)}
    `,
    checkedIndicator: `
        <svg part="checked-indicator" class="checked-indicator" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z" />
        </svg>
    `,
});

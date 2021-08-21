import { ElementDefinitionContext, FoundationElement, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { html, css, attr } from "@microsoft/fast-element";
import { Button } from "@microsoft/fast-components";
interface CounterDefinition extends FoundationElementDefinition {
    defaultButtonContent?: string;
}

const counterTemplate = (context: ElementDefinitionContext, definition: CounterDefinition) => {
    const buttonTag = context.tagFor(Button);

    return html`
        <p>The count is ${x => x.count}.</p>
        <${buttonTag} appearance="accent" @click=${x => x.increment()}>
            <slot>${definition.defaultButtonContent!}</slot> <!--Use the custom configuration-->
        </${buttonTag}>
    `;
}

const counterStyles = (context: ElementDefinitionContext) => {
    const buttonTag = context.tagFor(Button);

    return css`
        ${buttonTag} {

        }
    `;
}

export class Counter extends FoundationElement {
    @attr count = 0;

    increment() {
        this.count++;
    }
}

export const counter = Counter.compose<CounterDefinition>({
    baseName: "counter",
    defaultButtonContent: "Click here",
    template: counterTemplate as any, // https://github.com/microsoft/fast/issues/5047
    styles: counterStyles,
});

/**
 * This UI index is the center of UI components
 * You can export all from here to
 */

import ButtonUI from "./button"
import ButtonMinimalUI from "./button-minimal"
import { StyledImage } from "./image/style"
import { StyledPane } from "./pane/style"
import { StyledText } from "./text/style"
import { StyledTitle } from "./title/style"
import BreadcrumbItemUI from "./breadcrumb/breadcrumb-item/BreadcrumbItem"
import BreadcrumbsUI from "./breadcrumb/breadcrumbs/Breadcrumbs"
import CheckboxUI from "./checkbox/Checkbox"
import InputUI from "./input/Input"
import SpinnerUI from "./spinner/Spinner"
import CollapseUI from "./collapse"
import IconUI from "./icon"
import { StyledSection, StyledWrapper } from "./section"
import DialogUI from "./dialog"

export const Button = ButtonUI
export const ButtonMinimal = ButtonMinimalUI
export const Image = StyledImage
export const Pane = StyledPane
export const Text = StyledText
export const Title = StyledTitle
export const BreadcrumbItem = BreadcrumbItemUI
export const Breadcrumbs = BreadcrumbsUI
export const Checkbox = CheckboxUI
export const Input = InputUI
export const Spinner = SpinnerUI
export const Collapse = CollapseUI
export const Icon = IconUI
export const Section = StyledSection
export const Wrapper = StyledWrapper
export const Dialog = DialogUI

import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header"

export default {
  title: 'Header',
  component: Header
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({}); 
Default.args = {
        dark: true,
        light: false,
        color: '',
        className: 'mb-4' 
};

export const LightMode = Template.bind({});
LightMode.args = {
    dark: false,
    light: true,
    color: 'light',
    className: 'mb-4'
};

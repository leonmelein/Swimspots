import 'bootstrap/dist/css/bootstrap.css';
import List from './List';

export default {
    title: 'List',
    component: List
};

const Template = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {};

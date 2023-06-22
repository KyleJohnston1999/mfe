import { mount } from 'auth/AuthApp';
import GenerateComponent from './GenerateComponent';

export default ({ onSignIn }) => GenerateComponent(mount, onSignIn);
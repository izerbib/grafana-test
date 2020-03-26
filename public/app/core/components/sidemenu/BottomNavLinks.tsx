import React, { PureComponent } from 'react';
import appEvents from '../../app_events';
import { User } from '../../services/context_srv';
import { NavModelItem } from '@grafana/data';
import { CoreEvents } from 'app/types';
import { OrgSwitcher } from '../OrgSwitcher';
import { getFooterLinks } from '../Footer/Footer';

export interface Props {
  link: NavModelItem;
  user: User;
}

interface State {
  showSwitcherModal: boolean;
}

class BottomNavLinks extends PureComponent<Props, State> {
  state: State = {
    showSwitcherModal: false,
  };

  onOpenShortcuts = () => {
    appEvents.emit(CoreEvents.showModal, {
      templateHtml: '<help-modal></help-modal>',
    });
  };

  toggleSwitcherModal = () => {
    this.setState(prevState => ({
      showSwitcherModal: !prevState.showSwitcherModal,
    }));
  };

  render() {
    const { link, user } = this.props;
    const { showSwitcherModal } = this.state;

    let children = link.children || [];

    if (link.id === 'help') {
      children = getFooterLinks();
    }

    return (
      <div className="sidemenu-item dropup">
        <a href={link.url} className="sidemenu-link" target={link.target}>
          <span className="icon-circle sidemenu-icon">
            {link.icon && <i className={link.icon} />}
            {link.img && <img src={link.img} />}
          </span>
        </a>
      </div>
    );
  }
}

export default BottomNavLinks;

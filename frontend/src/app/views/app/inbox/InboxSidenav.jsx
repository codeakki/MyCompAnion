import React, { useState } from "react";
import { Button } from "react-bootstrap";
import InboxComposeDialog from "./InboxComposeDialog";

const InboxSidenav = ({ open, toggleSidenav }) => {
  let [composeDialogOpen, setComposeDialogOpen] = useState(false);
  const closeDialog = () => {
    setComposeDialogOpen(false);
  };

  return (
    <div
      className="inbox-main-sidebar sidebar"
      style={{ left: open ? 0 : "-180px" }}
    >
      <div className="pt-3 pr-3 pb-3">
        <i
          className="sidebar-close i-Close cursor-pointer"
          onClick={() => toggleSidenav("mainSidenavOpen")}
        ></i>
        <button
          onClick={() => setComposeDialogOpen(true)}
          className="btn btn-rounded btn-primary btn-block mb-4"
        >
          Compose
        </button>
        <div className="pl-3">
          <p className="text-muted mb-2">Browse</p>
          <ul className="inbox-main-nav">
            <li>
              <span className="active">
                <i className="icon-regular i-Mail-2"></i> Inbox (2)
              </span>
            </li>
            <li>
              <span>
                <i className="icon-regular i-Mail-Outbox"></i> Sent
              </span>
            </li>
            <li>
              <span>
                <i className="icon-regular i-Mail-Favorite"></i> Starred
              </span>
            </li>
            <li>
              <span>
                <i className="icon-regular i-Folder-Trash"></i> Trash
              </span>
            </li>
            <li>
              <span>
                <i className="icon-regular i-Spam-Mail"></i> Spam
              </span>
            </li>
          </ul>
        </div>
      </div>
      <InboxComposeDialog
        open={composeDialogOpen}
        handleClose={closeDialog}
      ></InboxComposeDialog>
    </div>
  );
};

export default InboxSidenav;

{
  /* <Button
        onClick={() => setOpen(true)}
        variant="danger"
        className="py-8 w-100"
      >
        Compose
      </Button>
      <ListItem button>
        <ListItemIcon>
          <Icon>inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>folder_special</Icon>
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>send</Icon>
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>error</Icon>
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <Icon color="primary">people</Icon>
        </ListItemIcon>
        <ListItemText primary="Social" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon color="secondary">local_offer</Icon>
        </ListItemIcon>
        <ListItemText primary="Promotions" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon color="secondary">forums</Icon>
        </ListItemIcon>
        <ListItemText primary="Forums" />
      </ListItem>

      <InboxComposeDialog open={open} handleClose={handleClose} /> */
}

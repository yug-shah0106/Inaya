var Notification = {
    _notificationSystem: null,

    setNotificationSystem(n) {
        console.log("setNotificationSystem called");
        this._notificationSystem = n;
    },

    //TODO Needs testing
    notify(opts) {
        this._notificationSystem.addNotification(...opts);
    },

    notifySuccess(message = '', title = '') {
        this._notificationSystem.addNotification({
            title: title,
            message: message,
            level: 'success'
        });
    },

    notifyError(message = '', title = '') {
        this._notificationSystem.addNotification({
            title: title,
            message: message,
            level: 'error'
        });
    },

    notifyInfo(message = '', title = '') {
        this._notificationSystem.addNotification({
            title: title,
            message: message,
            level: 'info'
        });
    }
}
export default Notification;

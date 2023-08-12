import instances from './instances';

import authModule from './auth.module';
import userModule from './user.module';
import postModule from './post.module';

export default {
    auth: authModule(instances.auth),
    users: userModule(instances.user),
    posts: postModule(instances.post)
};

import instances from './instances';

import userModule from './user.module';
import postModule from './post.module';

export default {
  users: userModule(instances.user),
  posts: postModule(instances.post)
};

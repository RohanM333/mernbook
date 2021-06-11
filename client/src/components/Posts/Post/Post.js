import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

      <CardContent>
        <Typography className={classes.titlecolor} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        <Typography className={classes.titlecolor} variant="h6" color="textSecondary">{"by " + post.name}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      {(user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
            <EditIcon fontSize="small" /> Edit
          </Button>
        )}
        {(user?.result?._id === post?.creator) && (
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;

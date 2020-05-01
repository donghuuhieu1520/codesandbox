<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <Post v-for="post in posts"
          class="mb-5"
          :author="post.author"
          :key="post.id"
          :avatar="post.avatar"
          :content="post.content"
          :upvote="post.upvote"
          :downvote="post.downvote"
          :commentsNumber="post.commentsNumber"
          :date="post.date"/>
      </v-col>
      <v-col cols="4">
        <PostFilter/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '@/components/dashboard/Post.vue'
import PostFilter from '@/components/dashboard/PostFilter.vue'
import lang from '@/util/lang'

export default {
  data: () => ({
    posts: [
      { id: 1, author: 'Monkey D. Luffy', avatar: '', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequatur et, iste cumque. Quis consectetur animi qui, blanditiis in, et laborum dolorem aliquid expedita hic eius, enim obcaecati ducimus molestias!', upvote: 10, downvote: 29, commentsNumber: 15, date: new Date(2020, 4, 30, 20, 14, 25, 40) },
      { id: 2, author: 'Monkey D. Luffy', avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequatur et, iste cumque. Quis consectetur animi qui, blanditiis in, et laborum dolorem aliquid expedita hic eius, enim obcaecati ducimus molestias!', upvote: 10, downvote: 29, commentsNumber: 15, date: new Date(2020, 4, 30, 20, 14, 25, 40) },
      { id: 3, author: 'Portgas D. Ace', avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam explicabo debitis, corrupti sequi cum, sint quisquam eius pariatur commodi quidem repellat doloribus cupiditate illum ut, optio vero veritatis aspernatur dolores!', upvote: 100, downvote: 50, commentsNumber: 20, date: new Date(2020, 4, 1, 20, 14, 25, 40) }
    ]
  }),
  components: {
    Post,
    PostFilter
  },
  metaInfo: {
    title: lang('dashboard.newfeeds')
  }
}
</script>

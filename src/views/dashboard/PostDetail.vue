<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="12" md="8">
        <Post
          class="mb-5"
          :author="post.author"
          :avatar="post.avatar"
          :content="post.content"
          :upvote="post.upvote"
          :downvote="post.downvote"
          :commentsNumber="post.commentsNumber"
          :date="post.date"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="8">
        <v-card>
          <v-tabs
            v-model="tab"
            color="primary"
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1">
              {{ $t('postdetail.playGround') }}
              <v-icon>mdi-code-tags</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              {{ $t('postdetail.review') }}
              <v-icon>mdi-comment-text-outline</v-icon>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
            >
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" xs="6" md="6">
                        <v-select
                          :items="post.allowedLanguages"
                          label="Select language"
                          dense
                          outlined
                        ></v-select>
                    </v-col>
                  </v-row>
                </v-card-text>
                <prism-editor
                  :code="code.content"
                  :language="code.language"
                  :lineNumbers="true">
                </prism-editor>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '@/components/dashboard/Post.vue'
import PrismEditor from 'vue-prism-editor'
import lang from '@/util/lang'
import 'vue-prism-editor/dist/VuePrismEditor.css'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default {
  data: () => ({
    tab: null,
    text: 'asdlsdlj',
    post: {
      id: 1,
      author: 'Monkey D. Luffy',
      avatar: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequatur et, iste cumque. Quis consectetur animi qui, blanditiis in, et laborum dolorem aliquid expedita hic eius, enim obcaecati ducimus molestias!',
      upvote: 10,
      downvote: 29,
      commentsNumber: 15,
      date: new Date(2020, 4, 30, 20, 14, 25, 40),
      allowedLanguages: ['js', 'python']
    },
    code: {
      language: 'js',
      content: `export default {
  data: () => ({
    post: {
      id: 1,
      author: 'Monkey D. Luffy',
      avatar: '',
      content: 'Lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 29,
      commentsNumber: 15,
      date: new Date(2020, 4, 30, 20, 14, 25, 40)
    },
    code: 'test'
  }),
  components: {
    Post,
    PrismEditor
  },
  metaInfo: {
    title: lang('dashboard.newfeeds')
  }
}
        `
    }
  }),
  components: {
    Post,
    PrismEditor
  },
  metaInfo: {
    title: lang('dashboard.newfeeds')
  }
}
</script>

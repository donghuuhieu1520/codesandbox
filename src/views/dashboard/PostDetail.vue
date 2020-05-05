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
          :date="post.date"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="12" md="8">
        <v-card>
          <v-tabs v-model="tab" color="primary" icons-and-text>
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
            <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" xs="6" md="6">
                      <v-select
                        :items="post.allowedLanguages"
                        v-model="languageSelected"
                        return-object
                        label="Select language"
                        dense
                        outlined
                      >
                        <template slot="item" slot-scope="lang">
                          <v-list-tile-avatar left>
                            <v-icon>{{ lang.item.icon }}</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <span class="ml-2">{{ lang.item.text }}</span>
                          </v-list-tile-content>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-card-text>
                <!-- <prism-editor
                  :language="languageSelected.value"
                  :code="code.content"
                  :lineNumbers="true">
                </prism-editor>-->
                <codemirror v-model="code.content" :options="code.options" />
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Submit</v-btn>
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
import lang from '@/util/lang'
import { codemirror } from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/go/go'
import 'codemirror/theme/monokai.css'

export default {
  data: () => ({
    tab: null,
    text: 'asdlsdlj',
    post: {
      id: 1,
      author: 'Monkey D. Luffy',
      avatar: '',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequatur et, iste cumque. Quis consectetur animi qui, blanditiis in, et laborum dolorem aliquid expedita hic eius, enim obcaecati ducimus molestias!',
      upvote: 10,
      downvote: 29,
      commentsNumber: 15,
      date: new Date(2020, 4, 30, 20, 14, 25, 40),
      allowedLanguages: [
        { text: 'Javascript', value: 'javascript', icon: 'mdi-language-javascript' },
        { text: 'CSharp', value: 'csharp', icon: 'mdi-language-csharp' },
        { text: 'Golang', value: 'golang', icon: 'mdi-language-go' }
      ]
    },
    languageSelected: { value: 'js' },
    code: {
      content: `const fs = require('fs');
      `,
      options: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        foldGutter: true,
        mode: 'text/x-go',
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: 'monokai',
        extraKeys: { Ctrl: 'autocomplete' },
        hintOptions: {
          completeSingle: false
        }
      }
    }
  }),
  components: {
    Post,
    codemirror
  },
  metaInfo: {
    title: lang('dashboard.newfeeds')
  }
}
</script>

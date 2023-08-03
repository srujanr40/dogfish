const Forum = require("../models/forumModel");

const forumQueries = {
    getForums: async function (filter) {
        let forums = await Forum.find(filter);
        if (forums === null) {
            forums = [];
        }
        return forums;
    },
    createNewForum: async function (forum) {
        const newForum = new Forum({
            lastModified: forum.lastModified,
            groupId: forum.groupId,
            chats: forum.chats
        });
        newForum.save()
            .then((savedForum) => {
                console.log('Forum saved:', savedForum);
            })
            .catch((error) => {
                console.error('Error saving forum:', error);
            })
    },
    updateForum: async function (forum) {
        const newForum = forum.chat
        Forum.findOne({groupId: forum.currentForum})
            .then(forumGroup => {
                if(forumGroup === null) {
                    forumGroup = []
                }
                forumGroup.chats.push(newForum); // Add the new forum to the forums array
                forumGroup.lastModified = new Date()

                forumGroup.save()
                    .then(updatedForumGroup => {
                        console.log('Forum updated:', updatedForumGroup);
                    })
                    .catch(error => {
                        console.error('Error updating forum:', error);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
    }
}


module.exports = forumQueries;
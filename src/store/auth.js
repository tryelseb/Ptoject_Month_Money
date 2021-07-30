import firebase from 'firebase/app'

export default {
    actions: {
        async login({a, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                console.log(a)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 0,
                    name // name: names
                })
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        }
    }
}
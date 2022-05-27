import React, {Component} from 'react';

import {
    BsBraces,
    BsHeart,
    BsBookmarks,
    BsChatRight,
    BsShare
} from 'react-icons/bs';

function HeadPost(props: any)
{
    return (
        <div className="post--head">
            <div className="post--head__user">
                <img
                    src="https://images.unsplash.com/photo-1653256221426-67e0b6660056?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736"
                    alt="user avatar"
                    className="post--head__user__avatar"/>
                <div className="post--head__user__info">
                    <div className="post--head__user__name">
                        vudeptrai
                    </div>
                    <div className="post__time">
                        10 days ago
                    </div>
                </div>
            </div>
            <BsBraces className="icon--secondary icon post__option" />
        </div>
    );
}

function BodyPost(props: any)
{
    return  (
        <div className="post--body">
            <img
                src="https://images.unsplash.com/photo-1634689033402-a132c62b310e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                alt=""
                className="post--body__image"/>
        </div>
    );
}

function BottomPost(props: any)
{
    return (
        <div className="post--bottom">
            <ul className="post--bottom__tool--left">
                <li className="post--bottom__tool">
                    <BsHeart id="" className="icon--primary icon love"/>
                    <div className="love__total total">
                        10k
                    </div>
                </li>
                <li className="post--bottom__tool">
                    <BsChatRight id="" className="icon--primary icon love"/>
                    <div className="comment__total total">
                        10k
                    </div>
                </li>
                <li className="post--bottom__tool">
                    <BsBookmarks id="" className="icon--primary icon love"/>
                        {/*<div className="save__total total">*/}
                        {/*    10k*/}
                        {/*</div>*/}
                </li>
            </ul>
            <div className="post--bottom__tool">
                <BsShare id="" className="icon--primary icon love"/>
                {/*<div className="love__total">*/}
                {/*    10k*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

// type htmlAttribute = {
//     className: string | null;
// }
//
// interface PostProps {
//     htmlAttribute: htmlAttribute | null;
//     functional: object | null;
// }

export class Post extends Component<any, any>
{
    constructor(props: any)
    {
        super(props);
    }

    love(){

    }

    render()
    {
        return (
            <div className="post">
                <HeadPost/>
                <BodyPost/>
                <BottomPost/>
            </div>
        );
    }
}
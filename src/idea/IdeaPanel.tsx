import React, { useState } from "react";
import { Idea } from "../Types";
import { IdeaInfo } from "./IdeaInfo";
import { IdeaVote } from "./IdeaVote";
import { IdeaRow } from "./IdeaRow";
import { Link } from "react-router-dom";

export function IdeaPanel(props: {ideas: Idea[]}) {
    const [selectedInfo, setSelectedInfo] = useState<Idea | undefined>(undefined);
    const [selectedVote, setSelectedVote] = useState<Idea | undefined>(undefined);

    return (
        <div className='flexColumn gap5' style={{minHeight: '250px', borderRadius: '10px'}}>
            {selectedInfo &&
              <IdeaInfo idea={selectedInfo} selectOkay={() => setSelectedInfo(undefined)}/>
            }
            {selectedVote &&
              <IdeaVote idea={selectedVote} selectOkay={() => setSelectedVote(undefined)}/>
            }
            {selectedInfo === undefined && selectedVote === undefined &&
              <div className='flexColumn gap5'>
                  {props.ideas.map(p =>
                      <IdeaRow key={p.id} idea={p} selectInfo={() => setSelectedInfo(p)} selectVote={() => setSelectedVote(p)}/>
                  )}
                  <div style={{marginTop: '20px'}}><Link to='/daohome'><button className='whiteButton'>BACK</button></Link></div>
              </div>
            }
        </div>
    );
}
